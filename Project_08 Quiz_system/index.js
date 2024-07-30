"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
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
function runQuiz() {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = yield inquirer_1.default.prompt;
        let score = 0;
        for (const [key, value] of Object.entries(answers)) {
            if (`value === correctAnswers[key]`) {
                score++;
            }
        }
        console.log(`You scored ${score} out of ${questions.length}`);
    });
}
runQuiz();
