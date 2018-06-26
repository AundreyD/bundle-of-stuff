#Cube Root Approximate Solution
cube = 25
epsilon = 0.01
guess = 0.0
increment = 0.01
num_guesses = 0
while abs(guess**3 - cube) >= epsilon and guess <= cube:
    guess += increment
    num_guesses += 1
print('num_guesses =', num_guesses)
if abs(guess**3 - cube) >= epsilon:
    print('Failed on cube root of', cube)
else:
    print(guess, 'is close to the cube root of', cube)

# A bisection searh reduces the computational time drastically
# It splits the number in half to find the approximate answer

#Bisection Search
#square root
x = 25
epsilon = 0.01
numGuesses = 0
low = 1.0
high = x
ans = (high + low)/2.0
while abs(ans**2 - x) >=epsilon:
    print('low = ' + str(low) + ' high = ' + str(high) + ' ans = ' + str(ans))
    numGuesses += 1
    if ans**2 < x:
        low = ans
    else:
        high = ans
    ans = (high + low)/2.0
print('numGuesses = ' + str(numGuesses))
print(str(ans) + ' is close to the square root of ' + str(x))

#Biscetion Search cube root
cube = 25
epsilon = 0.01
num_uesses = 0
low = 1.0
high = cube
guess = (high + low)/2.0

# while abs(guess**3 - cube) >= epsilon:
#     if guess**3 < x:
#         low = ans
#     else:
#         high = ans
#     guess = (high + low)/2.0
#     num_guesses +=1
# print('num_guesses =', num_guesses)
# print(guess, 'is close to the cube root of', cube)

#Number to binary
num = 11
if num < 0:
    isNeg = True
    num = abs(num)
else:
    isNeg = False
result = ''
if num == 0:
    result = '0'
while num > 0:
    result = str(num%2) + result
    num = num//2
if isNeg:
    result = '-' + result
print('result',result)

#Decimal to binary
x = float(input('Enter a decimal number between 0 and 1: '))
p = 0
while ((2**p)*x)%1 !=0:
    print('Remainder = ' + str((2**p)*x - int((2**p)*x)))
    p += 1

num = int(x*(2**p))

result = ''
if num == 0:
    result = '0'
while num > 0:
    result = str(num%2) + result
    num = num//2

for i in range(p - len(result)):
    result = '0' + result
result = result[0:-p] + '.' + result[-p:]
print('The binary representation of the decimal ' + str(x) + ' is ' + result)

#Newton-Raphson - gives another way of generating guesses we can check, very efficient
epsilon = 0.01
y = 24.0
guess = y/2.0
numGuesses = 0

while abs(guess*guess - y) >= epsilon:
    numGuesses += 1
    guess = guess - (((guess**2) - y)/(2*guess))
print('numGuesses =',str(numGuesses))
print('square root of',str(y),'is about',str(guess))

#Tower of Hanoi
def printMove(fr, to):
    print('move from ',str(fr),'to',fr(to))

def Towers(n, fr, to, spare):
    if n == 1:
        printMove(fr, to)
    else:
        Towers(n-1, fr, spare, to)
        Towers(1, fr, to, spare)
        Towers(n-1, spare, to, fr)

#Fibonacci
def fib(x):
    if x == 0 or x ==1:
        return 1
    else:
        return fib(x-1) + fib(x-2)

#recursive palindrome
def isPalindrome(x):
    def toChars(x):
        x = x.lower()
        ans = ''
        for c in x:
            if c in 'abcdefghijklmnopqrstuvwxyz':
                ans += c
        return ans
    def isPal(s):
        if len(s) <= 1:
            return True
        else:
            return s[0] == s[-1] and isPal(s[1:-1])
    return isPal(toChars(x))