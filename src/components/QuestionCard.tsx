import React from "react";
type props ={
    question: string;
    answer: string[];
    callback: any;
    userAnswer:string;
    questionNr: number;
    totalQuestions: number;
}
const QuestionCard: React.FC<props> =({ 
    question,
    answer,
    callback,
    userAnswer,
    questionNr,
    totalQuestions})=> (<div>Question Card</div>
    )


export default QuestionCard