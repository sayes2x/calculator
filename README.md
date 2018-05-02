# Calculator

A JavaScript calculator written with React.js

This calculator is my attempt to create the [JavaScript calculator](https://sayes2x-react-calculator.netlify.com/) to fufill 
one of the Advanced Front End Development project requirement for freeCodeCamp.

## Features

* Written using React.js
* Originally build using [Codepen](https://codepen.io/sayes2x/pen/XqJOye)
* Ported to [create react app](https://github.com/facebook/create-react-app) 
to move to its own page on [netlify](https://github.com/facebook/create-react-app)
* Button Functions:
  * AC: clears the calculator
  * C: clears the last entered number or function
  * %: calculate percents
  * +, -, x, ÷: basic math operations
  * .0123456789: enter numbers
  * =: calculate results
* Displays up to 10 digits as result
* Converts to scientific notation if needed to fit result in display
* Second row in display shows equation entered
* Can chain equations (5 + 6 x 98 - 5%)
* Implement order of operations
* Detects divide by zero  

## Use

To use this calculator press the buttons on the screen or use the following keyboard shortcuts:

Button | Shortcut(s)
------ | ----------
AC | ‘Escape’, ‘Delete’, ‘a’, ‘A’
C | ‘Backspace’, ‘c’, ‘C’
= | ‘=’, ‘Enter’
\+ | ‘+’
\- | ‘-’
x | ‘*’
÷ | ‘/’
% | ‘%’, ‘p’, ‘P’
.0123456789 | ‘.’ ‘0’, ‘1’, ‘2’, ‘3’, ‘4’, ‘5’, ‘6’, ‘7’, ‘8’, ‘9’
