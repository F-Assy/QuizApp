import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}){
    const shuffledAnswers = useRef();

       if(!shuffledAnswers.current){
          shuffledAnswers.current = [...answers];
          shuffledAnswers.current.sort( ()=> Math.random()-0.5);
       }
       
    
    return (
        <ul id="answers">
                {
                    shuffledAnswers.current.map( (answer)=>{
                       const isSelected = selectedAnswer===answer;
                       let cssClasses = '';
                       if(answerState==='answered' && isSelected){
                        cssClasses='selected';
                       }
                       if(isSelected && (answerState==='correct' || answerState==='wrong')){
                           cssClasses=answerState;
                       }
                       return (
                        <li className="answer" key={answer}>
                            <button onClick ={()=>onSelect(answer)} className={cssClasses} disabled={answerState!==''}>{answer}</button>
                        </li>
                       );
                    }
                )}
            </ul>
    )
}