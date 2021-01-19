//Base Solution
function same(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.length; i++;
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1);
    }
}
//Better solution
function same2(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0 ) + 1
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log("Frequency Counter1", frequencyCounter1);
    console.log("Frequency Counter2", frequencyCounter2)
    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}

let testArr1 = [1,2,2,3]
let testArr2 = [1.9,4,4]

//Anagram
function validAnagram(str1, str2){
    if(str1.length !== str2.length) {
        return false;
    }
    const lookup = {}

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        //If letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        //If letter exists and isn't zero, reduce by 1 else return false
        if(lookup[letter]) {
            lookup[letter] -= 1
        } else {
            return false;
        }
    }
    return true;
}