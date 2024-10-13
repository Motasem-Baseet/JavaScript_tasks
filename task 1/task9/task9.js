
    let numbs = 1;
    for( numbs = 0; numbs <= 50; numbs++){
        if(numbs % 2===0)
            
        
        console.log(numbs);
    }

console.log("***********************************************************");


for(numbs = 0; numbs <=50 ; numbs++){
    if(numbs % 2===0)
    console.log(numbs);

}
console.log("-------------");

let no = 1;
while(no < 50){
    console.log(no);
    no +=2;
    
}


console.log("*********************************");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.log("*****************************************");
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}
console.log("**********************************");


for (let i = 1; i <= 100; i++) {
    fizzBuzz(i);
}


console.log("-------------------------------------");
function fizzBuzz(num) {
    if (num > 100) {
        return;
    }

    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }

    fizzBuzz(num + 1);
}


fizzBuzz(1);


console.log("-----------------------------------");
function convertToBanknotes(amount, banknotes) {
    const result = []; 

    banknotes.sort((a, b) => b - a);

   
    for (let note of banknotes) {
       
        while (amount >= note) {
            result.push(note); 
            amount -= note;   
        }
    }

    return result;
}


const amount = 57;
const banknotes = [25, 10, 5, 1];
console.log(convertToBanknotes(amount, banknotes).join(", ")); 

console.log("*************************************");

for (let i = 0; i <= 20; i++) {
    console.log(i);
}

console.log("\nOdd numbers from 3 to 29:");
for (let i = 3; i <= 29; i++) {
    if (i % 2 !== 0) { 
        console.log(i);
    }
}

console.log("\nEven numbers from 12 to -14:");
for (let i = 12; i >= -14; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("\nMultiples of 3 from 50 to 20:");
for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

console.log("******************************");
const str = 'CodingAcademy';
const arr = [7, 500, 'KH404', 'black', 36];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}

const str1 = 'CodingAcademy';
const arr1 = [7, 500, 'KH404', 'black', 36];


console.log("Elements of the array:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr1[i]);
}


for (let i = str.length - 1; i >= 0; i--) {
    console.log(str1[i]);
}



const proteins = ['chicken', 'noodles', 'tofu', 'beef', 'fish', 'beans'];
const grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
const vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
const beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
const desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


function createUniqueMeals(numberOfMeals) {
    const meals = new Set(); 

    
    while (meals.size < numberOfMeals) {
        
        const protein = proteins[Math.floor(Math.random() * proteins.length)];
        const grain = grains[Math.floor(Math.random() * grains.length)];
        const vegetable = vegetables[Math.floor(Math.random() * vegetables.length)];
        const beverage = beverages[Math.floor(Math.random() * beverages.length)];
        const dessert = desserts[Math.floor(Math.random() * desserts.length)];

       
        const meal = `${protein}, ${grain}, ${vegetable}, ${beverage}, ${dessert}`;

       
        meals.add(meal);
    }

    return Array.from(meals); 
}


const uniqueMeals = createUniqueMeals(5);
console.log("Unique Meals:");
uniqueMeals.forEach(meal => console.log(meal));