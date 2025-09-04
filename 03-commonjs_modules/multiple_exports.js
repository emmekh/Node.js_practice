const myName = 'Emil';
const myHobbies = ['watch TV', 'playing games', 'learn new stuff'];
const myAge = 35;

console.log('Text from the multiple-exports module');

module.exports.myName = myName;
module.exports.myHobbies = myHobbies;
module.exports.myAge = myAge;
