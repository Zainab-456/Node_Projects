import inquirer from "inquirer";

const questions = [
    {
        type: "list",
        name: "question1",
        message: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"]
    },
    {
        type: "list",
        name: "question2",
        message: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Venus"]
    },
    {
        type: "list",
        name: "question3",
        message: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"]
    }
];

const correctAnswers = {
    question1: "Paris",
    question2: "Mars",
    question3: "Pacific Ocean"
};
async function runQuiz() {
    const answers = await inquirer.prompt;

    let score = 0;
    for (const [key, value] of Object.entries(answers)) {
        if (`value === correctAnswers[key]`) {
            score++;
        }
    }

    console.log(`You scored ${score} out of ${questions.length}`);
}

runQuiz();


