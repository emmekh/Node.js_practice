const fs = require('fs');
const dns = require('dns');

function info(text) {
    console.log(text, performance.now().toFixed(1));
}

console.log('Program start');

// Timeouts
setTimeout(() => info('Timeout 1:'), 0);
setTimeout(() => {
    process.nextTick(() => info('Next tick 2:'));
    info('Timeout 2:');
}, 10);

// Intervals
let intervalCount = 0;
const interval = setInterval(() => {
    info(`Interval ${(intervalCount += 1)}`);
    if (intervalCount === 3) clearInterval(interval);
}, 50);

// Close events
fs.writeFile('./01-event_loop_events/test.txt', 'Hello Node.js', () =>
    info('File written:')
);

// Promises
Promise.resolve().then(() => info('Promise 1:'));

// NextTick
process.nextTick(() => info('Next tick 1:'));

// setImmeadiate
setImmediate(() => info('Immediate 1:'));

// I/O events
dns.lookup('localhost', () => {
    info('DNS 1 localhost:');
    Promise.resolve().then(() => info('Promise 2:'));
    process.nextTick(() => info('Next tick 3:'));
});

console.log('Program end');
