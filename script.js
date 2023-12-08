var num1 = +prompt("enter no 1");
var num2 = +prompt("enter no 2");
var operator = prompt("chose operator");
if(operator === '+' ){
    console.log(num1 + num2);
}
else if(operator === '-'){
    console.log(num1 - num2);


}
else{
    console.log(num1 * num2);
}


var n = +prompt("Enter a no");
for(i=0; i<=n; i++){
    console.log("Hello World");
}



var lower = "my name is owais ali";
var replace = lower.replace("owais", "awais");
console.log(replace);

var finding = lower.indexOf("name");
console.log(finding);
var lenMeasure = lower.length;
console.log(lenMeasure);
var extract = lower.slice(0,9);
console.log(extract);
var upper = lower.toUpperCase();
console.log(upper);



var number = 3.5;
var ceilRes = Math.ceil(number);
console.log(ceilRes);
var floorRes = Math.floor(number);
console.log(floorRes);
var result = Math.round(number);
console.log(result);



var random = Math.random();
var ran = Math.round((random * 5) +1);
console.log(ran);