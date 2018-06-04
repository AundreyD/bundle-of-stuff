"""
Write a program that asks the user to enter an integer and prints two integers, root and pwr, 
such that 0 < pwr < 6 and root**pwr is equal to the integer by the user, If no such pair of integers exists,
it should print a message in that effect
"""

integer = int(input('Enter an integer '))
final = []
for root in range(6):
    if len(final) == 0:
        for pwr in range(6):
            print(root**pwr)
            if root**pwr == integer:
                print('MATCH')
                final.append(root)
                final.append(pwr)
                break
if len(final) == 0:
    print('No matches pleighboi')
else:
    print('root =',final[0],'pwr =',final[1])

"""
Let s be a string that contains a sequence of decimal numbers separated by commas, e.g. s = '1.23,2.4,3.123'
Write a program that prints the sum of the numbers in s
"""
s = '1.23,2.4,3.123'
s = s.split(',')
final = 0
for x in s:
    final += float(x)
print(final)

