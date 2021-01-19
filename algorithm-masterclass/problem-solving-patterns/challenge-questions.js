// Frequency counter - same frequency
// Write a function called sameFrequency. Given two positive integers, 
// find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
/* 
Test Cases:
sameFrequency(182, 281)
sameFrequency(34, 14)
sameFrequency(3589578, 5879385)
sameFrequency(22, 222)
*/
// My solution
function sameFrequency(int1, int2){
    // good luck. Add any arguments you deem necessary.
    let str1 = int1.toString();
    let str2 = int2.toString();
    let freq = {};
    if(str1.length !== str2.length){
        return false;
    }
    for(let i = 0; i < str1.length; i++) {
        freq[str1[i]] ? freq[str1[i]] += 1 : freq[str1[i]] = 1;
    }
    for(let i = 0; i < str2.length; i++) {
        let x = str2[i];
        if(freq[x]) {
            freq[x] -=1;
        } else {
            return false;
        }
    }
    return true;
}
// Course Solution
function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
}
// Frequency Counter / Multiple Pointers - are there duplicates
// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there
// are any duplicates amonththe arguments passed in. You can solve this by using the frequency counter pattern Or the muliple pointers pattern
/*
Test cases:
areThereDuplicates(1,2,3)
areThereDuplicates(1,2,2)
areThereDuplicates('a','b','c','a')
*/
// Time - O(N)
// Space - O(N)
// My Solution
function areThereDuplicates() {
    // good luck. (supply any arguments you deem necessary.)
    const args = [].slice.call(arguments);
    let hold = {};
    for(let i= 0; i < args.length; i++){
        let x = args[i]
        if(hold[x]) {
            return true
        } else {
            hold[x] = 1;
        }
    }
    return false;
}
// Course Solution - Frequency Counter
function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
}
// Course Solution - Multiple pointers
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
}

// Course Solution - One line
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }

// Multiple Pointer - averagePair
// Write a function called averagePair. Given a sorted array of integers and target average, determine if
// there is a pair of values in the array where the average of the pair equals the target average. There may be more
// thank one pair that matches the average target
// Time - O(N)
// Space - O(1)
function averagePair(arr, avg){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length === 0) return false
    let first = 0;
    let last = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if((arr[first] + arr[last]) / 2 === avg) {
            return true
        }
        if((arr[first] + arr[last]) / 2 < avg) {
            first++;
        } else{
            last--;
        }
    }
    return false
}
// Course Solution
function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
  }
// Multiple Pointers - isSubsequence
// Write a fucntion called isSubsequence which takes in two strings and checks whether the characters in
// the first string for a subsequence of the characters in the second string. 
// The function should check whether the characters in the first string appear somewhere in the second string
// without their order changing
// Time - O(N+M)
// Space - O(1)
/*
isSubsequence('hello, 'hello world')
isSubsequence('sing, 'sting')
isSubsequence('abc, 'abracadabra')
isSubsequence('abc, 'acb')
*/
//DID NOT COMPLETE
// Course Solution - isSubsequence Solution - Iterative
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
}
// Course Solution - isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
}


