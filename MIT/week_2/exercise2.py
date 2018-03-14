#Guess my number
"""
In this problem, you'll create a program that guesses a secret number!
The program works as follows: you (the user) thinks of an integer between 0 (inclusive) and 
100 (not inclusive). The computer makes guesses, and you give it input - is its guess too high or 
too low? Using bisection search, the computer will guess the user's secret number!

"""
# Paste your code into this box 
import math
low = 0.0
high = 100.0
guess = (low + high)/2
done = False
secrit = None
print('Please think of a number between 0 and 100:')
while done != True:
    print('Is your secret number',str(guess) +'?')
    entry = input("Enter 'h' to indicate the guess is too high. Enter 'l' to indicate the guess is too low. Enter 'c' to indicate I guessed correctly.")
    if entry == 'h':
        high = guess
    elif entry == 'l':
        low = guess
    elif entry == 'c':
        done = True
        secrit = guess
    else:
        print('Sorry, I didn\'t understand your input.')
    guess = math.floor((high + low)/2.0)
print('Game over. Your secret number was:', secrit)