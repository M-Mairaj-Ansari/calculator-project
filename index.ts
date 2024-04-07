#! /usr/bin/evn node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "Enter frist number", type: "number", name: "firstnumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "selet one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition" , "Subtraction" , "Multiplication" , "Division"],
    },
]);

if(answer.operator === "Addition"){
    console.log(answer.firstnumber + answer.secondnumber)
}
else if(answer.operator === "Subtraction"){
    console.log(answer.firstnumber - answer.secondnumber)
}
else if(answer.operator === "Multiplication"){
    console.log(answer.firstnumber * answer.secondnumber)
}
else if(answer.operator === "Division"){
    console.log(answer.firstnumber / answer.secondnumber)
}
else{console.log("Please Select Valid Operator")}







