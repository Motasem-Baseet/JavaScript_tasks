
let str = "cactus";
let firstLetter = str[0];
let modify = firstLetter + str.slice(1).replace(new RegExp(firstLetter, 'g'), '*');
console.log(modify);
