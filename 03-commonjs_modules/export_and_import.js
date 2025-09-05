const { myName, myHobbies } = require('./multiple_exports');
const myFriendsName = 'Alice';

module.exports.myName = myName;
module.exports.myFriendsName = myFriendsName;
module.exports.newHobbies = myHobbies;
