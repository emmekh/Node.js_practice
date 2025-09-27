import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('myEvent', () => {
    console.log('First event listener');
});

myEmitter.on('myEvent', () => {
    console.log('Second event listener');
});
myEmitter.on('newEvent', () => {
    console.log('Other event');
});

myEmitter.setMaxListeners(25);
console.log(myEmitter.eventNames());
console.log(myEmitter.getMaxListeners());

setTimeout(() => myEmitter.emit('myEvent'), 1000);
