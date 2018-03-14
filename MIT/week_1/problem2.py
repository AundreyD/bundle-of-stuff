# Assume s is a string of lower case characters.

# Write a program that prints the number of times the string 'bob' occurs in s. 
# For example, if s = 'azcbobobegghakl', then your program should print: Number of times bob occurs is: 2

# Trash
# count = 0
# for x in range(len(s) - 2):
#   bob = s[x - 1] + s[x] + s[x + 1]
#   if bob == 'bob':
#     count +=1
# print('Number of times bob occurs is:', count)

#Good
s = 'azcbobobegghakl'
start = 0
end = 3
count = 0
for letter in s:
  if s[start:end] == 'bob':
    count+=1
  start += 1
  end +=1
print('Number of times bob occurs is:', count)

#Alternate without two counters
# count = 0
# for i in range (len(s)):
#         if s[i:i+3]== 'bob':
#           count+=1
# print('Number of times bob occurs is: ' + str(count))