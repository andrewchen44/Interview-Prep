def amendTheSentence(s):
    amended = s[0].lower()

    for x in range(1, len(s)):
        if s[x].isupper():
            amended += ' '
        amended += s[x].lower()

    return amended

amendTheSentence('ThisIsATestSentence')
