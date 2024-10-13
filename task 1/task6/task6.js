function stringToArray(str) {
    return JSON.parse(str);


const inpt6 = '"Alice", "Bob", "Charlie"';
const rest6 = stringToArray(inpt6);
console.log(result); 
}

function names(fname){
    return JSON.parse(fname)
}
let namee = '["motasem" , "ahmad"]';
let result = names(namee);
console.log(result);

function number(pnumber){
    if (pnumber.length != 10)
        return "invalid no"
    return "*******" + pnumber.slice(-3);
}
let no =number("0781747224")
console.log(no);


function inpt2(fsection , lsection){
    if(fsection.length > 6 ){
    return  fsection.slice(0,6) + "..." + lsection;
    }
}
let mail =inpt2("oragne_academy" , "@gmail.com")
console.log(mail);


function str(str1){
    return str1.charAt(0).toUpperCase() + str1.slice(1);
}
let text =str("coding academy by orange");
console.log(text);


function str2(str2){
    return str2.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}
let text1 =str2("coding academy by orange");
console.log(text1);




function flibno(reves) {
    return parseInt(reves.toString().split('').reverse().join('')) * Math.sign(reves);
}
const input1 = 12345;
const reversed = flibno(input1);
console.log(reversed);




function swapVariables(inpt3) {
    let [a, b] = inpt3.split(', ').map(v => parseInt(v.split('=')[1]));
    let temp = a;
    a = b;
    b = temp;
    return `a=${a}, b=${b}`;
}
console.log(swapVariables("a=3, b=4"));