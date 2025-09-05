const { myName, myHobbies, myAge } = require('./multiple_exports');
const {
    myName: myOtherName,
    myFriendsName,
    newHobbies,
} = require('./export_and_import');
const greeting = require('./my_modules/single_export');

// import from multiples_exports
console.log(myName);
console.log(myHobbies);
console.log(myAge);

// import from single_export
greeting(myName);

myHobbies.push('Climbing');

// import from export_and_import
console.log(myOtherName);
console.log(myFriendsName);
console.log(newHobbies);
