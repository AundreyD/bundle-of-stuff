const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');

const multerOptions = {
    storage: multer.memoryStorage(),
    fileFilter: (req, file, next) => {
        const isPhoto = file.mimetype.startsWith('image');
        if(isPhoto){
            next(null, true);
        } else{
            next({message: 'That filetype isn\'t allowed'}, false)
        }
    }
};
// exports.myMiddleware = (req, res, next) => {
//     req.name = "Aundrey";
//     if(req.name === 'Aundrey'){
//         throw Error('Blocked')
//     }
//     next();
// }
exports.homepage = (req, res) => {
    // const Aundrey = { name: 'Aundrey', age:26, cool: true}
  // res.send('Hey! It works!');
  // res.json(Aundrey)
  // res.send(req.query)
//   res.render('hello', {
//     name: 'Otto' ,
//     breed: "wolf",
//     title: 'Food es good'
//   })

    res.render('index')
}

exports.addStore = (req, res) => {
    res.render('editStore', {title: 'Add Store'});
};

exports.upload = multer(multerOptions).single('photo')

exports.resize = async (req,res,next) => {
    //Check if there no new file to resize
    if(!req.file){
        next(); //Skips to next middleware
        return
    }
    const extension = req.file.mimetype.split('/')[1]
    req.body.photo = `${uuid.v4()}.${extension}`;
    //Resize now
    const photo = await jimp.read(req.file.buffer)
    await photo.resize(800, jimp.AUTO);
    await photo.write(`./public/uploads/${req.body.photo}`)
    //Once the photo is written to the file system, keep going
    next()
};

exports.createStore = async (req, res) => {
    const store = await(new Store(req.body)).save()
    req.flash('success', `Successfully Created ${store.name}. Care to leave a review?`)
    console.log('saved to db')
    res.redirect(`/store/${store.slug}`)
}
exports.getStores = async (req, res) => {
    //1. Query the database for a list of all stores
    const stores = await Store.find();

    res.render('stores', {title: 'stores', stores})
}
exports.editStore = async (req,res) => {
    //Find store given Id
    // res.json(req.params.id)
    const store = await Store.findOne({_id: req.params.id})
    //  res.json(store)
    //Confirm owner of the store
    //Render out edit for so user can update their store
    res.render('editStore', {title: `Edit ${store.name}`, store})
}
exports.updateStore = async (req,res) =>{
    req.body.location.tyoe = 'Point';
    //Find and update store
    const store = await Store.findOneAndUpdate({_id: req.params.id}, req.body,{
        new: true, //Return new store instead of old one
        runValidators: true,
    }).exec()
    req.flash('success', `Successfully updated <strong>${store.name}</strong>. <a href="/stores/${store.slug}">View Store →</a>`)
    //Redirect to store and tell them it worked
    res.redirect(`/stores/${store._id}/edit`);
}

exports.getStoreBySlug = async (req,res, next) => {
    const store = await Store.findOne({slug: req.params.slug })
    if(!store){
        return next();
    }
    res.render('store', {store, title: store.name})

}

exports.getStoresByTag = async (req, res) =>{
    const tag = req.params.tag;
    const tagQuery = tag || {$exists:true}
    const tagsPromise = Store.getTagsList();
    const storesPromise = Store.find({tags:tagQuery });
    const [tags, stores] = await Promise.all([tagsPromise, storesPromise]);
    
    res.render('tags', {tags, title:  'Tags', tag, stores})
}  