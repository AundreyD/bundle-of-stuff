/* 1. Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

function solution (){
    let x = 7;
    let ans = '#';
    for (let i = 0; i < x; i++) {
        console.log(ans);
        ans += '#';
     }
}
// solution();

/* 2. Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those). */

 function fizzBuzz (){
    let x = 100;
    for (let i = 1; i <= x; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        }
    }
 }
// fizzBuzz();

/* 3. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard. */
function chessBoard (){
    let size = 8;
    for (let i = 0; i < size; i++) {
        if (i === 0 || i % 2 === 0) {
            console.log(' # # # #');
        } else {
            console.log('# # # # ');
        }
    }
}
chessBoard();