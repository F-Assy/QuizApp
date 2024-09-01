import { useCallback, useState } from "react";
import QUESTIONS from '../questions';
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz(){
    
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    
    const quizIsComplete = activeQuestionIndex===QUESTIONS.length;


    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
       
        setUserAnswers((previousState)=>{
            return [...previousState,selectedAnswer];
        });

    },[]);
    const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer]);//adding this dependency since it's a value that depends on props and states


    if(quizIsComplete){
        return(
            <Summary userAnswers={userAnswers} />
        );
    }
   
    return (
        <div id="quiz">
           <Question
              key = {activeQuestionIndex}
              index = {activeQuestionIndex}
              onSelectAnswer = {handleSelectAnswer}
              onSkipAnswer={handleSkipAnswer}
           />
        </div>
    )
}

