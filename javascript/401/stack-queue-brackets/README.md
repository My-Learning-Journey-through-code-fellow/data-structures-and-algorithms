# Code Challenge 13

## stack-queue-brackets

## Problem Domain

Write a function called **validate brackets**, it takes in a string as an argument and returns a boolean representing whether or not the brackers in the string are balanced.

## Whiteboard-Process

![Code Challenge 13](../code%20challenges/assets/CodeChallenge13.jpg)

## Approach & Efficiency

We brought in a stack then, and added the opening brackets , parenthesis, and curlies to the stack, and popped them off as we added the closing correlating types of brackets to ensure they are balanced, if the stack was empty whenever after the while loop iterated we returned true, if it equaled anything other than 0 it returns false.
