var num1=10,num2=20,num3=15;
if(num1>num2 && num1>num3){
    // console.log(num1);
    // if(num2>num3){
    //     console.log("second",num2);
    // }
    //     else{
    //         console.log("second",num3);
    //     }

    /////////////////////////////ternary op///////////////////////
    console.log(num2>num3?num2:num3);
}
else if(num2>num1 && num2>num3){
    // console.log(num2);
    // if(num1>num3){
    //     console.log("second",num1);
    // }
    // else{
    //     console.log("second",num3);
    // }
        /////////////////////////////ternary op///////////////////////
    console.log(num1>num3?num1:num3);
}
else if(num3>num1 && num3>num2){
    // console.log(num3);
    // if(num1>num2){
    //     console.log("second",num1);
    // }
    // else{
    //     console.log("second",num2);
    // }
        /////////////////////////////ternary op///////////////////////
    console.log(num1>num2?num1:num2);
}