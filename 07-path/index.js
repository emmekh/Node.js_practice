const path = require('path');

const filePath = 'C:/Users/admin/Desktop/node/index.js';
const textFilePath = 'C:/Users/admin/Desktop/file.txt';
const relativePath = './node/movide.mp4';
const directoryPath = './node/subfolder';

console.log(path.isAbsolute(filePath)); // true
console.log(path.isAbsolute(relativePath)); // false

console.log(path.basename(filePath)); // index.js
console.log(path.basename(directoryPath)); // subfolder

console.log(path.dirname(filePath)); // C:/Users/admin/Desktop/node
console.log(path.dirname(directoryPath)); // ./node

console.log(path.resolve(relativePath)); // e:\GIT\Node.js_practice\node\movide.mp4

console.log(path.extname(textFilePath)); // .txt

console.log(path.parse(filePath));

const parsedPath = path.parse(filePath);
console.log(filePath);
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`));
