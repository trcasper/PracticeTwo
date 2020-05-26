INTRODUCTION TO JAVASCRIPT
What is JavaScript?
Last year, millions of learners from our community started with JavaScript. Why? JavaScript is primarily known as the language of most modern web browsers, and its early quirks gave it a bit of a bad reputation. However, the language has continued to evolve and improve. JavaScript is a powerful, flexible, and fast programming language now being used for increasingly complex web development and beyond!

Since JavaScript remains at the core of web development, it’s often the first language learned by self-taught coders eager to learn and build. We’re excited for what you’ll be able to create with the JavaScript foundation you gain here. JavaScript powers the dynamic behavior on most websites, including this one.

In this lesson, you will learn introductory coding concepts including data types and built-in objects—essential knowledge for all aspiring developers. Make sure to take notes and pace yourself. This foundation will set you up for understanding the more complex concepts you’ll encounter later.

Console
The console is a panel that displays important messages, like errors, for developers. Much of the work the computer does with our code is invisible to us by default. If we want to see things appear on our screen, we can print, or log, to our console directly.

In JavaScript, the console keyword refers to an object, a collection of data and actions, that we can use in our code. Keywords are words that are built into the JavaScript language, so the computer will recognize them and treats them specially.

One action, or method, that is built into the console object is the .log() method. When we write console.log() what we put inside the parentheses will get printed, or logged, to the console.

It’s going to be very useful for us to print values to the console, so we can see the work that we’re doing.

console.log(5); 
This example logs 5 to the console. The semicolon denotes the end of the line, or statement. Although in JavaScript your code will usually run as intended without a semicolon, we recommend learning the habit of ending each statement with a semicolon so you never leave one out in the few instances when they are required.

You’ll see later on that we can use console.log() to print different kinds of data.

1.
Use the console.log code in the editor to log your age to the console.

Run your code when you are ready to see the result.


Stuck? Get a hint
2.
On the next line, log a number representing the number of weeks you’ve been programming.

console.log(30);

console.log(50);

Comments
Programming is often highly collaborative. In addition, our own code can quickly become difficult to understand when we return to it— sometimes only an hour later! For these reasons, it’s often useful to leave notes in our code for other developers or ourselves.

As we write JavaScript, we can write comments in our code that the computer will ignore as our program runs. These comments exist just for human readers.

Comments can explain what the code is doing, leave instructions for developers using the code, or add any other useful annotations.

There are two types of code comments in JavaScript:

1.
Let’s practice adding some code comments.

To the right, we’ve provided you with the beginning of the book Catch-22 by Joseph Heller.

On line 1, write a single line comment that says Opening line.


Stuck? Get a hint
2.
Single line comments are great for adding context to your code. Multi-line comments are often best suited to prevent a block of code from running. However, both types of comments can be used for either purpose.

Use a multi-line comment so that the bottom 6 console.log() statements are all commented out.

// Opening line
console.log('It was love at first sight.');
/*
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/

Data Types
Data types are the classifications we give to the different kinds of data that we use in programming. In JavaScript, there are seven fundamental data types:

Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ". Though we prefer single quotes. Some people like to think of string as a fancy word for text.
Boolean: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.
Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null.
Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
Object: Collections of related data.
The first 6 of those types are considered primitive data types. They are the most basic data types in the language. Objects are more complex, and you’ll learn much more about them as you progress through JavaScript. At first, seven types may not seem like that many, but soon you’ll observe the world opens with possibilities once you start leveraging each one. As you learn more about objects, you’ll be able to create complex collections of data.

But before we do that, let’s get comfortable with strings and numbers!

console.log('Location of Codecademy headquarters: 575 Broadway, New York City');
console.log(40);
In the example above, we first printed a string. Our string isn’t just a single word; it includes both capital and lowercase letters, spaces, and punctuation.

Next, we printed the number 40, notice we did not use quotes.

1.
On line 1, log the string 'JavaScript' to the console.


Stuck? Get a hint
2.
On line 2, log the number 2011 to the console.


Stuck? Get a hint
3.
On line 3, print 'Woohoo! I love to code! #codecademy' to the console.


Stuck? Get a hint
4.
On line 4, print the number 20.49 to the console.

console.log('JavaScript');

console.log(2011);

console.log('Woohoo! I love to code! #codecademy');

console.log(20.49);

Arithmetic Operators
Basic arithmetic often comes in handy when programming.

An operator is a character that performs a task in our code. JavaScript has several built-in in arithmetic operators, that allow us to perform mathematical calculations on numbers. These include the following operators and their corresponding symbols:

Add: +
Subtract: -
Multiply: *
Divide: /
Remainder: %
The first four work how you might guess:

console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3
Note that when we console.log() the computer will evaluate the expression inside the parentheses and print that result to the console. If we wanted to print the characters 3 + 4, we would wrap them in quotes and print them as a string.

console.log(11 % 3); // Prints 2
console.log(12 % 3); // Prints 0
The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can: 11 % 3 equals 2 because 3 fits into 11 three times, leaving 2 as the remainder.

1.
Inside of a console.log(), add 3.5 to your age.

This is the age you’ll be when we start sending people to live on Mars.


Stuck? Get a hint
2.
On a new line write another console.log(). Inside the parentheses, take the current year and subtract 1969.

The answer is how many years it’s been since the 1969 moon landing.


Stuck? Get a hint
3.
Create another console.log(). Inside the parentheses divide 65 by 240.


Stuck? Get a hint
4.
Create one last console.log(). Inside the parentheses, multiply 0.2708 by 100.

That’s the percent of the sun that is made up of helium. Assuming we could stand on the sun, we’d all sound like chipmunks!

console.log(3.5 + 30);

console.log (2020 - 1969);

console.log(65 / 240);

console.log(0.2708 * 100);

String Concatenation
Operators aren’t just for numbers! When a + operator is used on two strings, it appends the right string to the left string:

console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('I love to ' + 'code.')
// Prints 'I love to code.'
This process of appending one string to another is called concatenation. Notice in the third example we had to make sure to include a space at the end of the first string. The computer will join the strings exactly, so we needed to make sure to include the space we wanted between the two strings.

console.log('front ' + 'space'); 
// Prints 'front space'
console.log('back' + ' space'); 
// Prints 'back space'
console.log('no' + 'space'); 
// Prints 'nospace'
console.log('middle' + ' ' + 'space'); 
// Prints 'middle space'
Just like with regular math, we can combine, or chain, our operations to get a final result:

console.log('One' + ', ' + 'two' + ', ' + 'three!'); 
// Prints 'One, two, three!'

1.
Inside a console.log() statement, concatenate the two strings 'Hello' and 'World'.

Note: You should concatenate the two strings exactly (without introducing any additional characters).


Stuck? Get a hint
2.
We left off the space last time. Create a second console.log() statement in which you concatenate the strings 'Hello' and 'World', but this time make sure to also include a space (' ') between the two words.

console.log('Hello' + 'World');

console.log('Hello' + ' ' + 'World');

Properties
When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. Every string instance has a property called length that stores the number of characters in that string. You can retrieve property information by appending the string with a period and the property name:

console.log('Hello'.length); // Prints 5
The . is another operator! We call it the dot operator.

In the example above, the value saved to the length property is retrieved from the instance of the string, 'Hello'. The program prints 5 to the console, because Hello has five characters in it.

1.
Use the .length property to log the number of characters in the following string to the console:

'Teaching the world how to code'

console.log('Teaching the world how to code'.length);

Methods
Remember that methods are actions we can perform. JavaScript provides a number of string methods.

We call, or use, these methods by appending an instance with:

a period (the dot operator)
the name of the method
opening and closing parentheses
E.g. 'example string'.methodName().

Does that syntax look a little familiar? When we use console.log() we’re calling the .log() method on the console object. Let’s see console.log() and some real string methods in action!

console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true
Let’s look at each of the lines above:

On the first line, the .toUpperCase() method is called on the string instance 'hello'. The result is logged to the console. This method returns a string in all capital letters: 'HELLO'.
On the second line, the .startsWith() method is called on the string instance 'Hey'. This method also accepts the character 'H' as an input, or argument, between the parentheses. Since the string 'Hey' does start with the letter 'H', the method returns the boolean true.
You can find a list of built-in string methods in the JavaScript documentation. Developers use documentation as a reference tool. It describes JavaScript’s keywords, methods, and syntax.

1.
Use the .toUpperCase() method to log the string 'Codecademy' to the console in all capital letters.


Stuck? Get a hint
2.
In the second console.log() statement in app.js, we have a string ' Remove whitespace ' which has spaces before and after the words 'Remove whitespace'.

If we browse the JavaScript string documentation, we find several built-in string methods that each accomplish a different goal. The one method that seems ideal for us is .trim().

Use the method to remove the whitespace at the beginning and end of the string in the second console.log() statement.

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

Built-in Objects
In addition to console, there are other objects built into JavaScript. Down the line, you’ll build your own objects, but for now these “built-in” objects are full of useful functionality.

For example, if you wanted to perform more complex mathematical operations than arithmetic, JavaScript has the built-in Math object.

The great thing about objects is that they have methods! Let’s call the .random() method from the built-in Math object:

console.log(Math.random()); // Prints a random number between 0 and 1
In the example above, we called the .random() method by appending the object name with the dot operator, the name of the method, and opening and closing parentheses. This method returns a random number between 0 and 1.

To generate a random number between 0 and 50, we could multiply this result by 50, like so:

Math.random() * 50;
The example above will likely evaluate to a decimal. To ensure the answer is a whole number, we can take advantage of another useful Math method called Math.floor().

Math.floor() takes a decimal number, and rounds down to the nearest whole number. You can use Math.floor() to round down a random number like this:

Math.floor(Math.random() * 50);
In this case:

Math.random generates a random number between 0 and 1.
We then multiply that number by 50, so now we have a number between 0 and 50.
Then, Math.floor() rounds the number down to the nearest whole number.
If you wanted to see the number printed to the terminal, you would still need to use a console.log() statement:

1.
Inside of a console.log(), create a random number with Math.random(), then multiply it by 100.


Stuck? Get a hint
2.
Now, use Math.floor() to make the output a whole number.

Inside the console.log() you wrote in the last step, put the existing Math.random() * 100 code inside the parentheses of Math.floor().


Stuck? Get a hint
3.
Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a decimal number.

Use this method with the number 43.8. Log the answer to the console.


Stuck? Get a hint
4.
Use the JavaScript documentation to find a method on the built-in Number object that checks if a number is an integer.

Put the number 2017 in the parentheses of the method and use console.log() to print the result.

console.log(Math.floor(Math.random() * 100));

console.log(Math.ceil(43.8));

console.log(Number.isInteger(2017));