"""
Write a program that examines three variables - x, y, and z and prints the largest odd number among them.
If none of them are odd, it should print a message to that effect
"""
largest = 0
largest_var = None
odds = []

x = int(input('Enter a number for x: '))
if x % 2 != 0:
    odds.append(x)
y = int(input('Enter a number for y: '))
if y % 2 != 0:
    odds.append(y)
z = int(input('Enter a number for z: '))
if z % 2 != 0:
    odds.append(z)
odds.sort()

if len(odds) != 0:
    print('The largest odd number is',odds[len(odds)-1])
else:
    print('Didn\'t enter any odds breh')

"""
Replace the following with a while loop
numXs = int(input('How many times should I print the letter x?'))
toPrint=''
#concatenate x toPrint numxs times
print(toPrint)
"""
numXs = int(input('How many times should I print the letter x? '))
toPrint=''
iterator = 0
while iterator < numXs:
    toPrint += 'x'
    iterator +=1
print(toPrint)

"""
Write a program that asks the user to input 10 integers, and then prints the lagest odd number that was entered
If no odd number was entered, it should print a message to that effect
"""
numbers = []
while len(numbers) < 10:
    numbers.append(int(input('Enter a number: ')))
odds = [num for num in numbers if num %2 !=0]
odds.sort()
if len(odds) == 0:
    print('Only evens entered breh')
else:
    print('largest odd number is:',odds[len(odds) -1])
