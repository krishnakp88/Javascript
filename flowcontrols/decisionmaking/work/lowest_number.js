var num1=10,num2=20,num3=15;
// if(num1<num2 && num1<num3){
//     console.log(num1);
// }
// else if(num2<num3 && num2<num1){
//     console.log(num2);
// }
// else if(num3<num1 && num3<num2){
//     console.log(num3);
// }else if(num1==num2 && num2==num3){
//     console.log("numbers are equal");
// }

//////////////////////////////////////////////////using ternary op///////////////////////////////////////////////////
console.log(num1<num2 && num1<num3?num1:num2<num3 && num2<num1?num2:num3<num1 && num3<num2?num3:"numbers are equal");