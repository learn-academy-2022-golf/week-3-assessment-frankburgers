# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:
JSX stands for JavaScript XML, and is an XML-like implementation of the JavaScript language. I believe the purpose of this implementation is to make it easier to handle the modularization that React brings to the development scene.

However, you do not need to implement the React framework using JSX. JSX can be identified in the code by existing between "node fragments", <> and </>, which can also be used as tags.

Researched answer:

JSX is an "extension" to the JavaScript language. It allows for populating the DOM with elements quickly, easily, and with little repeated code, within the React framework.

JSX is translated into JavaScript at runtime.

2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer:

Yarn is a package manager for JavaScript. It allows for smoother interaction between different files.

Yarn includes its own testing modality called Jest, which stands for JavaScript Testing, or something along those lines. It is run using $ yarn jest.

Running yarn in the terminal will install Jest, and a nodes file which I am not familiar with. 

Researched answer:

Yarn is an alternative to npm, and was created by Facebook. When yarn is run in a directory on a mac, it creates a file named yarn.lock and a directory named node_modules.

3. What is an anonymous function in JavaScript?

Your answer:

An anonymous function is a function with no name. It is created when a function will only be used once and does not need to be named, such as in the argument of an array map or filter method.

The anonymous function takes the following form.

const = (arg1, arg2,...) => {
    line 1
    line 2...
    return statement
}

Researched answer:

The keyword 'this' does not work with arrow functions.

4. What is the difference between state values and props in React?

Your answer:

State values use memory to store values using state. They require an import statement. Props are ways of sending references of state variables to other components.

Researched answer:

Both are JavaScript objects, and cause the page to re-render when updated. Props can only be passed one way. State is used by components to manage their own data. 

5. What is the DOM?

Your answer:

The Document Object Model is how HTML, CSS, JavaScript, et al. view the document being worked on and can access and modify it, as well as display it.

Researched answer:

The DOM is a programming interface. It is a representation of the web document, consisting of nodes.  

6. STRETCH: Which is the difference between a div and a span?

Your answer:

A div is an html element which creates a newline character at the end. A span does not. 

Researched answer:

I would correct my terminology, and use "block-level" to describe the organizational foundation of a div, and "inline" for span.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:

OOP is a concept which followed sequential programming, in which early computers followed the instructions provided on punch cards. It is based on well-defined interactions between components and user-input if required.

2. Ruby:

An object oriented programming language which first appeared in the 1990's. It uses a .rb file extension, and is implemeted in C. It is most widely known for it's web applications.

3. Implicit return:

Implicit return is the return of a value from a function without the explicit use of a 'return' statement. 

4. Ruby blocks:

A Ruby block appears to be similar to an anonymous function. They take in arguments and have a return operation. They are enclosed in a do / end statement.

5. Ruby hashes:

A hash is a data structure. It uses key-value pairs to store values in memory in the Ruby programming language. It does not use numerical indexes to access values.