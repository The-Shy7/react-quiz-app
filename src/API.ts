import {shuffleArray} from './utils';

// specify individual question's properties
export type Question = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string,
}

export type QuestionState = Question & {answers: string[]};

// specified endpoint values from the API
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    // map through data and add new "answers" property
    // containing all possible answers for a question
    // so we have an easy way to map through all of the answers
    return data.results.map((question: Question) => ({
        ...question, 
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }
    ))
}