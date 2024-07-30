//  Number guessing game 
import inquirer from 'inquirer';
const systemgeneratedNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userguess",
        message: "Write your Guess b/w 1 to 10 ",
    }
]);
const { userguess } = answers;
console.log(userguess, "userguess", systemgeneratedNo, "sys");
if (userguess === systemgeneratedNo) {
    console.log("Yeah your answer is correct /n You Win! ");
}
else {
    console.log("Please try again. Better Luck next time!");
}
