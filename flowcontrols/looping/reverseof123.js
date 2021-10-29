// var num=123;
// while(num!=0){
//     let last_digit=num%10
//     console.log(last_digit);
//     num=Math.floor(num/10)
// }


//////////////////////////////to allign output in a single line
var num=123;
var res=""
while(num!=0){
    let last_digit=num%10
res+=last_digit    
num=Math.floor(num/10)
}
console.log(res);


