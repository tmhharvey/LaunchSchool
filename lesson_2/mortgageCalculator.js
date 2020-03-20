const readline = require("readline-sync");

let prompt = message => {
  return console.log(`==> ${message}`);
};

let calcPureNum = string => {
  let stringToNum = string;
  stringToNum = stringToNum.replace("$", "");
  stringToNum = stringToNum.replace(",", "");
  stringToNum = parseFloat(stringToNum);
  return Math.round(stringToNum);
};

let calcMonthlyInterest = string => {
  let stringToNum = parseFloat(string);
  let monthlyInterest = stringToNum / 12 / 100;

  return monthlyInterest;
};

let monthlyMortgageCalc = (loanAmt, annualInterest, loanDur) => {
  let pureLoanAmt = calcPureNum(loanAmt);
  let monthlyInt = calcMonthlyInterest(annualInterest);
  let loanDurationInMonths = parseFloat(loanDur);

  let monthlyMortgagePayment =
    pureLoanAmt *
    (monthlyInt / (1 - Math.pow(1 + monthlyInt, -loanDurationInMonths)));

  return monthlyMortgagePayment.toFixed(2);
};
while (true) {
  let monthlyMortgageResult = "";

  console.log("==================================================");
  console.log("Hello and welcome to the mortgage calculator app!");
  console.log("This app will require some information from you");
  console.log("and then tell you what your monthly mortgage payment is.");
  console.log("Let's get started!");
  console.log("==================================================");

  prompt("First, what is your total loan amount in US dollars?");
  let totalLoanAmount = readline.question();

  prompt("Thank you! Next, what is your Annual Interest Rate?");
  prompt("For example: 25%");
  let annualInterest = readline.question();

  prompt("Finally, what is the duration of your loan in MONTHS?");
  prompt("For example: 24");
  let loanDurationMonths = readline.question();

  monthlyMortgageResult = monthlyMortgageCalc(
    totalLoanAmount,
    annualInterest,
    loanDurationMonths
  );

  console.log("==================================================");
  console.log(`Your Monthly Mortgage Payment is: $${monthlyMortgageResult}`);
  console.log("==================================================");
  console.log("Thank you so much for using the Mortgage Calculator!");
  prompt("Would you like to perform another operation? (y/n)");
  let appContinue = readline.question();

  if (appContinue !== "y") break;
}
