import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magenta("*-------Wellcome to Currency Converter-------*"))
const currency:any = {
    USD: 1,  //BASE CURRENCY
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 278.16

}
let userAnswer= await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter from Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR"]
        },
        {
            name: "to",
            message: "Enter to Currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR"]
        },
        {
            name: "amount",
            message: "Enter your amount",
            type: "number",
        },
    ]
);

// dynamic approch Perform currency conversion by using Formula 
let fromAmount = currency[userAnswer.from] //exchange rate
let toAmount = currency[userAnswer.to] //exchange rate

// Formula for conversion
let amount = userAnswer.amount
let baseAmount = amount / fromAmount //usd is base currency
let convertedAmount = baseAmount * toAmount 

console.log(`Converted Amount= ${chalk.blue(convertedAmount.toFixed(2))}`);