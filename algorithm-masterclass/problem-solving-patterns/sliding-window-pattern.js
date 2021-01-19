//Basic Solution
//Time Complexity O(N^2)
function maxSubarraySum(arr, num) {
    if ( num > arr.length) {
        return null;
    }
    let max = -Infinity;
    for( let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max
}

//Better Solution
//Time Complexity O(N)
function betterMaxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempsum = 0;
    if( arr.length < num){
        return null;
    }
    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++) {
        tempsum = tempsum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempsum);
    }
    return maxSum;
}
