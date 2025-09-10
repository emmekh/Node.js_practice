const fs = require('fs');

try {
  fs.writeFileSync('./first.txt', 'First file text');
  console.log('File first.txt was written');
  fs.appendFileSync('./first.txt', '\nNew line');
  console.log('Appended text to the first.txt file');
  fs.renameSync('./first.txt', 'updated_first.txt');
  console.log('File first.txt was renamed to updated_first.txt');
} catch (err) {
  console.log(err);
}
