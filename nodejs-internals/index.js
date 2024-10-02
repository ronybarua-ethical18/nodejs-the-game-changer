// Node js is a runtime environment for javascript that allows javascript to run on the server side. It
// is built on chrome's v8 engine and libuv library.

// Node js is a single threaded, event driven, non-blocking I/O model.

/*what is event driven means?

Event-driven programming is a paradigm where the flow of the program is determined by events such as user actions, sensor outputs, or messages from other programs or threads. In the context of Node.js, "event-driven" refers to its architecture that's built around responding to various events.
Let's break this down using the code snippet you provided:
In this code, we can see several examples of event-driven programming:
setTimeout: This sets up an event that will occur after a specified delay (in this case, 0 milliseconds). When the timer expires, the callback function is executed.
setImmediate: This schedules a callback to be executed in the next iteration of the event loop, after I/O events.
fs.readFile: This initiates an asynchronous file read operation. When the file is read (or if an error occurs), the callback function is called.
The last console.log is not event-driven; it's executed immediately as part of the main program flow.
In an event-driven system like Node.js:
1. The program sets up listeners for various events (like timers expiring, I/O operations completing, etc.).
It then enters an "event loop", where it continuously checks for and responds to events.
3. When an event occurs, the corresponding callback function (also called an event handler) is executed.
After handling an event, the program returns to the event loop to wait for more events.
This model allows Node.js to handle many operations concurrently without using multiple threads. Instead of waiting for an operation to complete before moving on to the next one, Node.js can initiate operations and then continue executing other code. When an operation completes, it triggers an event, and Node.js handles it accordingly.
This event-driven nature is what makes Node.js particularly efficient for I/O-heavy applications, as it can handle many concurrent operations without blocking the execution of the program.
i don't understand what event driven is

I apologize for the confusion in my previous explanation. Let me try to explain event-driven programming in simpler terms, without relying on the code snippet.
Event-driven programming is like a restaurant kitchen:
1. Events: These are like orders coming into the kitchen. In programming, events can be things like a user clicking a button, data arriving from a database, or a timer finishing.
Event Loop: This is like the chef constantly checking for new orders. In Node.js, the event loop keeps checking if there are any events to handle.
Event Handlers: These are like the recipes for different dishes. When an order (event) comes in, the chef (Node.js) knows which recipe (event handler) to use.
Non-blocking: The chef doesn't wait around for one dish to finish cooking before starting another. They put things in the oven, then work on something else while waiting. This is how Node.js handles multiple tasks efficiently. */

const fs = require('fs');
const crypto = require('crypto');


process.env.UV_THREADPOOL_SIZE = 1;


const startTime = Date.now();

setTimeout(() => {
    console.log('Hello from setTimeout');
}, 0);

setImmediate(() => {
    console.log('Hello from setImmediate');
});

fs.readFile('file.txt', (err, data) => {
    console.log('Hello from readFile');

    setTimeout(() => {
        console.log('Hello from readFile setTimeout 2');
    }, 0);
    setTimeout(() => {
        console.log('Hello from readFile setTimeout 3');
    }, 5000);

    setImmediate(() => {
        console.log('Hello from readFile setImmediate 2');
    });


    // CPU Intensive task

    crypto.pbkdf2('password1', 'salt', 100000, 1024, 'sha512', (err, key) => {
        console.log('Hello from crypto 1', Date.now() - startTime);
    });

    crypto.pbkdf2('password2', 'salt', 100000, 1024, 'sha512', (err, key) => {
        console.log('Hello from crypto 2', Date.now() - startTime);
    });

    crypto.pbkdf2('password3', 'salt', 100000, 1024, 'sha512', (err, key) => {
            console.log('Hello from crypto 3', Date.now() - startTime);
    });

    crypto.pbkdf2('password4', 'salt', 100000, 1024, 'sha512', (err, key) => {
        console.log('Hello from crypto 4', Date.now() - startTime);
    });
    crypto.pbkdf2('password5', 'salt', 100000, 1024, 'sha512', (err, key) => {
        console.log('Hello from crypto 5', Date.now() - startTime);
    });
    crypto.pbkdf2('password6', 'salt', 100000, 1024, 'sha512', (err, key) => {
        console.log('Hello from crypto 6', Date.now() - startTime);
    });
    crypto.pbkdf2('password7', 'salt', 100000, 1024, 'sha512', (err, key) => {
        console.log('Hello from crypto 7', Date.now() - startTime);
    });
    crypto.pbkdf2('password8', 'salt', 100000, 1024, 'sha512', (err, key) => {
        console.log('Hello from crypto 8', Date.now() - startTime);
    });
    crypto.pbkdf2('password9', 'salt', 100000, 1024, 'sha512', (err, key) => {
        console.log('Hello from crypto 9', Date.now() - startTime);
    });
});

console.log('Hello from top level code');


