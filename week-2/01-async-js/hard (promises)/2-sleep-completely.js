/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve) => {
        const start = Date.now();
        // Busy-waiting loop
        while (Date.now() - start < milliseconds) {
            // Do nothing, just loop until the time has passed
        }
        resolve(); // Resolve the promise after the loop finishes
    });
}
// const sleep = require('./sleep');

async function example() {
    console.log('Wait starts...');
    await sleep(2000); // Wait for 2 seconds
    console.log('Wait ends after 2 seconds!');
}

example();  

// module.exports = sleep;
