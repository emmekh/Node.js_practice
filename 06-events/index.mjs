import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

const timeoutListenerFn = (secondsQty) => {
    console.log(`Timeout event in ${secondsQty} seconds`);
};

myEmitter.on('timeout', timeoutListenerFn);

setTimeout(() => myEmitter.emit('timeout', 1), 1000);
setTimeout(() => myEmitter.emit('timeout', 2), 2000);

myEmitter.once('singleEvent', () => {
    console.log('Single event');
});

// функция слушателя будет вызвано только один раз, из-за метода .once()
setTimeout(() => myEmitter.emit('singleEvent'), 500);
setTimeout(() => myEmitter.emit('singleEvent'), 1500);

// отключение слушателя события "timeout"
setTimeout(() => myEmitter.off('timeout', timeoutListenerFn), 3000);
setTimeout(() => myEmitter.emit('timeout', 4), 4000);
