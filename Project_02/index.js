import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Enter Your ID",
    },
    {
        type: "password",
        name: "userPin",
        message: "Enter Your Pin",
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Saving", "Current"],
        message: "Select Account Type",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["fastcash", "withdraw"],
        message: "Select Transaction Type",
        when(answers) {
            return answers.accountType;
        }
    },
    {
        type: "list",
        name: "amount",
        choices: ["1000", "2000", "10000", "20000"],
        message: "Select your amount",
        when(answers) {
            return answers.transactionType === "fastcash";
        }
    },
    {
        type: "input",
        name: "amount",
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType === "withdraw";
        }
    }
]);
console.log(answers);
