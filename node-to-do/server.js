var express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      Task = require('./api/models/todoListModel')
      bodyParser = require('body-parser')
      port = process.env.PORT || 3000;

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/Tododb'); 
      

mongoose.connection.on('connected', function () {  
    console.log('Mongoose default connection open to ' + 'mongodb://127.0.0.1:27017/Tododb');
  }); 
  
  // If the connection throws an error
  mongoose.connection.on('error',function (err) {  
    console.log('Mongoose default connection error: ' + err);
  }); 
  
  // When the connection is disconnected
  mongoose.connection.on('disconnected', function () {  
    console.log('Mongoose default connection disconnected'); 
  });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())



let routes = require('./api/routes/todoListRoutes')
routes(app);


app.listen(port);
