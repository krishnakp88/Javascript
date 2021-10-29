var num=8;

// if(num % 15==0){
//     console.log("fizzbuzz");
// }
// else if(num % 5==0){
//     console.log("buzz");
// }
// else if(num % 3==0){
//     console.log("fizz");
// }
// else{
//     console.log("invalid");
// }

//////////////////////////////////////////////////using ternary op///////////////////////////////////////////////////
console.log((num%15==0)?"fizzbuzz":(num%5==0)?"buzz":(num%3==0)?"fizz":"invalid")