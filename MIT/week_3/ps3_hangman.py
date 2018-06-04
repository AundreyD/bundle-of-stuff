# Hangman game
#

# -----------------------------------
# Helper code
# You don't need to understand this helper code,
# but you will have to know how to use the functions
# (so be sure to read the docstrings!)

import random
import string

WORDLIST_FILENAME = "words.txt"

def loadWords():
    """
    Returns a list of valid words. Words are strings of lowercase letters.
    
    Depending on the size of the word list, this function may
    take a while to finish.
    """
    print("Loading word list from file...")
    # inFile: file
    inFile = open(WORDLIST_FILENAME, 'r')
    # line: string
    line = inFile.readline()
    # wordlist: list of strings
    wordlist = line.split()
    print("  ", len(wordlist), "words loaded.")
    return wordlist

def chooseWord(wordlist):
    """
    wordlist (list): list of words (strings)

    Returns a word from wordlist at random
    """
    return random.choice(wordlist)

# end of helper code
# -----------------------------------

# Load the list of words into the variable wordlist
# so that it can be accessed from anywhere in the program
wordlist = loadWords()

def isWordGuessed(secretWord, lettersGuessed):
    '''
    secretWord: string, the word the user is guessing
    lettersGuessed: list, what letters have been guessed so far
    returns: boolean, True if all the letters of secretWord are in lettersGuessed;
      False otherwise
    '''
    # FILL IN YOUR CODE HERE...
    default = True
    for letter in secretWord:
      if letter not in lettersGuessed:
        default = False
    return default



def getGuessedWord(secretWord, lettersGuessed):
    '''
    secretWord: string, the word the user is guessing
    lettersGuessed: list, what letters have been guessed so far
    returns: string, comprised of letters and underscores that represents
      what letters in secretWord have been guessed so far.
    '''
    # FILL IN YOUR CODE HERE...
    final = ''
    for letter in secretWord:
      if letter in lettersGuessed:
            final += letter
      else:
            final += '_ '
    return final



def getAvailableLetters(lettersGuessed):
    '''
    lettersGuessed: list, what letters have been guessed so far
    returns: string, comprised of letters that represents what letters have not
      yet been guessed.
    '''
    # FILL IN YOUR CODE HERE...
    remainingAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for letter in lettersGuessed:
          if letter in remainingAlpha:
                remainingAlpha.remove(letter)
    return ''.join(remainingAlpha)
    

def hangman(secretWord):
    '''
    secretWord: string, the secret word to guess.

    Starts up an interactive game of Hangman.

    * At the start of the game, let the user know how many 
      letters the secretWord contains.

    * Ask the user to supply one guess (i.e. letter) per round.

    * The user should receive feedback immediately after each guess 
      about whether their guess appears in the computers word.

    * After each round, you should also display to the user the 
      partially guessed word so far, as well as letters that the 
      user has not yet guessed.

    Follows the other limitations detailed in the problem write-up.
    '''
    # FILL IN YOUR CODE HERE...
    print('Welcome to the game Hangman!')
    print('I am thinking of a word that is', len(secretWord), 'letters long')
    print('-----------')
    alphabet = string.ascii_lowercase
    guesses = 8
    guessedLetters = []
    word = getGuessedWord(secretWord,guessedLetters)
    remainingAlpha = getAvailableLetters(guessedLetters)
    while guesses != 0:
          print('You have',guesses,'guesses left')
          availableLetters = getAvailableLetters(guessedLetters)
          print('Available letters:',availableLetters)
          guess = input('Please guess a letter: ').lower()
          word = getGuessedWord(secretWord, guessedLetters)
          # if guess in secretWord and isWordGuessed(secretWord, guessedLetters):
          if guess in guessedLetters:
                 print("Oops! You've already guessed that letter:",word)
                 print('-----------')
          if guess in secretWord and guess not in guessedLetters: 
                guessedLetters.append(guess)
                word = getGuessedWord(secretWord, guessedLetters)
                print('Good Guess:',word)
                print('-----------')
          if guess not in secretWord and guess not in guessedLetters:
                guessedLetters.append(guess)
                word = getGuessedWord(secretWord, guessedLetters)
                print('Oops! That letter is not in my word:',word)
                print('-----------')
                guesses -=1
          remainingAlpha = getAvailableLetters(guessedLetters)
          if secretWord == word:
                break
    if secretWord != word:
        stringg = 'Sorry, you ran out of guesses. The word was ' +secretWord
        return stringg
    else:
          print('Congratulations, you won!')
    ##close
    # while guesses != 0:
    #       print('You have',guesses,'guesses left')
    #       availableLetters = getAvailableLetters(guessedLetters)
    #       print('Available letters:',availableLetters)
    #       guess = input('Please guess a letter: ').lower()
    #       word = getGuessedWord(secretWord, guessedLetters)
    #       if isWordGuessed(secretWord, guessedLetters):
    #              print("Oops! You've already guessed that letter:",word)
    #              print('-----------')
    #       guessedLetters.append(guess)
    #       word = getGuessedWord(secretWord, guessedLetters)
    #       if isWordGuessed(secretWord, guessedLetters):
    #             print('Good Guess:',word)
    #             print('-----------')
    #       elif guess in secretWord:
    #             print('Good Guess:',word)
    #             print('-----------')
    #       if guess not in secretWord:
    #             print('Oops! That letter is not in my word:',word)
    #             print('-----------')
    #             guesses -=1
         
    #       remainingAlpha = getAvailableLetters(guessedLetters)
    #       if secretWord == word:
    #             break
    # if secretWord != word:
    #     stringg = 'Sorry, you ran out of guesses. The word was ' +secretWord
    #     return stringg
    # else:
    #       print('Congratulations, you won!')
   

    






# When you've completed your hangman function, uncomment these two lines
# and run this file to test! (hint: you might want to pick your own
# secretWord while you're testing)

secretWord = 'y'
hangman(secretWord)


#  print('The secret word contains ', len(secretWord), 'letters.')
#     alphabet = string.ascii_lowercase
#     guesses = 0
#     guessedLetters = []
#     word = getGuessedWord(secretWord,guessedLetters)
#     remainingAlpha = getAvailableLetters(guessedLetters)
#     while secretWord != word:
#           guess = input('Guess a letter ').lower()
#           guesses += 1
#           guessedLetters.append(guess)
#           word = getGuessedWord(secretWord, guessedLetters)
#           remainingAlpha = getAvailableLetters(guessedLetters)
#           print('Current word', word)
#           print('Remaining letters', remainingAlpha)
#     print('Your word was', word)
#     print('It only took',guesses,'guesses.')