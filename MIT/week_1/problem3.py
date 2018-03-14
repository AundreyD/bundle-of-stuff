# Assume s is a string of lower case characters.

# Write a program that prints the longest substring of s in which the 
# letters occur in alphabetical order. For example, if s = 'azcbobobegghakl',
# then your program should print Longest substring in alphabetical order is: beggh

# In the case of ties, print the first substring. For example, if s = 'abcbcd', 
# then your program should print Longest substring in alphabetical order is: abc


s = 'abcdefghijklmnopqrstuvwxyz'
temp = ''
substr = ''
length = len(s)
for i in range (len(s)-1):
  count = i
  temp = s[count:count+1]
  for x in range(len(s)-1):
    print('first one', s[count:count+1])
    print('second one', s[count+1:count+2])
    if s[count:count+1] < s[count+1:count+2] or s[count:count+1] == s[count+1:count+2]:
      print(s[count:count+1] < s[count+1:count+2])
      temp += s[count+1:count+2]
      count +=1
    else: 
      print(s[count:count+1] < s[count+1:count+2])
      print('end')
      break
      
  print('temp', temp)
  if len(temp) > len(substr):
    substr = temp
print(substr)