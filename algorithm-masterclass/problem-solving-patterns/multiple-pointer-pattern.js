//Basic Solution
//Time Complexity - O(N^2)
//Space Complexity - o(1)
function sumZero(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

//Better Solution
//Time Complexity - o(N)
//Space Complexity - 0(1)
function betterSumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right --;
        } else {
            left ++;
        }
    }
}

//Count unique values
//My solution O(n)
//Counts through the array, comparing the next value with the x index
//If the values are not equal the increment the index and give it the unique value
//If the values are equal, do nothing
//Return must be +1 because the count doesn't include the beginning index
function countUniqueValues(arr){
    let x = 0;
    if(arr.length === 0) {
        return 0
    }
    for(let i = 1; i < arr.length; i++) {
        if(arr[x] !== arr[i]){
            x+=1;
            arr[x] = arr[i]
        }
    }
    return x +=1 ;
}

//Solutions that don't use the multiple pointer pattern
function uniqueCountUsingSet(arr) {
    return new Set(arr).size
}

function uniqueCountNonSorted(arr) {
    let unique = [];
    for(let val of arr){
        if(!(unique.includes(val))){
           unique.push(val);
        }
    }
    return unique.length;
}