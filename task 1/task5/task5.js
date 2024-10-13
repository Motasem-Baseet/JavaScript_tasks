
let arr = ["coding" , "academy" , "by" , "orange"]

// push jordan
arr.push("jordan")
console.log(arr);

// slice

console.log(arr.slice(1,4));

// unshift
arr.unshift("welcome" , "to")
console.log(arr);

// arr.slice(0,2);
console.log(arr.slice(0,2));

// join
console.log(arr.join(" "));

// pop
arr.pop();
console.log(arr);

console.log(arr.slice(2,4));

let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// task2


// delete last Element
vegetables.pop()
console.log(vegetables);

// delete first Element
console.log(fruit.slice(1));

// find index
let inde = fruit.indexOf("orange")
console.log(inde);

// push the index of orange
let orange_ind = fruit.push(inde);
console.log(fruit);

// find the lenth of vegetables
let veg_len = vegetables.length
console.log(veg_len);

// add the number of length to vegetables 
let V_Length = vegetables.push(veg_len)
console.log(vegetables);

let food = fruit.concat(vegetables);
console.log(food);

// remove two element 
console.log(food.slice(2.4));

// reverse
console.log(food.reverse());

// string

console.log(food.toString());


