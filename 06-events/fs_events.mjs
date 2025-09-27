import { EventListener } from 'events';
import fs from 'fs';
const fileEmitter = new EventListener();

fileEmitter.on('writeComplete', () => {
    console.log('File first.txt was written');
    fs.appendFile('./first.txt', '\nNew line', () => {
        fileEmitter.emit('appendComplete');
    });
});

fileEmitter.on('appendComplete', () => {
    console.log('Appended text to the first.txt file');
});

fs.writeFile('./first.txt', 'First file text', () => {
    fileEmitter.emit('writeComplete');
    fs.rename('./first.txt', 'updated_first.txt', () => {
        fileEmitter.emit('renameComplete');
    });
});

fileEmitter.on('renameComplete', () => {
    console.log('File first.txt was renamed to updated_first.txt');
});
