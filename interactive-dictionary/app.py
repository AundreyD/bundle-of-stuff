import json
from difflib import get_close_matches

dictionary = json.load(open('./data.json'))

w = input('Enter the word you would like to search: ').lower()
# print('too big', dictionary)
def get_def(word):
    final = ''
    if word in dictionary:
        return dictionary[word]
    elif word.title() in dictionary:
        return dictionary[word.title()]
    elif word.upper() in dictionary:
        return dictionary[word.upper()]
    elif len(get_close_matches(word, dictionary.keys())) > 0:
        true_word = get_close_matches(word, dictionary.keys())[0]
        redo = input("Did you mean %s instead? Enter yes if yes " % true_word).lower()
        if redo == 'yes':
            get_def(true_word)
        else:
            return("%s does not exist in this dictionary homie" % word)
    else:
        return('%s does not exist in here' % word)
    return(final)

output = get_def(w)
if type(output) == list:
    for item in output:
        print('-' + item)
else:
    print(output)
