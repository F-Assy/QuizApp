import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from "../questions";

export default function Question({ index,onSelectAnswer, onSkipAnswer}){

    const [answer, setAnswer] = useState({
        selectedAnswer : '',
        isCorrect : null
    });

    let timer =10000;

    if(answer.selectedAnswer){
        timer =1000;
    }
    if(answer.isCorrect!==null){
        timer = 2000;
    }

    function handleSelectAnswer(answer){
        setAnswer(prevState => ({
            ...prevState,
            selectedAnswer: answer,
            isCorrect: null
        }));

        setTimeout(()=>{
            setAnswer(prevState => ({
                ...prevState,
                isCorrect:  QUESTIONS[index].answers[0]===answer
            }));

            setTimeout(()=>{
               onSelectAnswer(answer);
            },2000);
        },1000);

    }
    let answerState = '';
    if(answer.selectedAnswer && answer.isCorrect!==null){
        answerState = answer.isCorrect ? "correct" : "wrong";
    }
    else if(answer.selectedAnswer){
        answerState="answered";
    }
    return (
        <div id="question">
            <QuestionTimer 
             key = {timer}
             timeout={timer}
             ontTimeOut={answer.selectedAnswer==='' ? onSkipAnswer: ()=>{}} 
             mode={answerState}/>

            <h2>{QUESTIONS[index].text}</h2>

            <Answers
              answers = {QUESTIONS[index].answers}
              selectedAnswer = {answer.selectedAnswer}
              answerState = {answerState}
              onSelect={handleSelectAnswer}
            />
        </div>
    )
}

