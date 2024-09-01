import quizCompletedImage from '../assets/quiz-complete.png';
import QUESTIONS from '../questions';
export default function Summary({userAnswers}){
  const skippedAnswers = userAnswers.filter( (answer) => answer===null);
  const correctAnwers = userAnswers.filter((answer,index) => answer===QUESTIONS[index].answers[0]);

  const skippedAns = Math.round( (skippedAnswers.length / userAnswers.length)*100  );
  const correctAns = Math.round( (correctAnwers.length / userAnswers.length)*100  );
  const wrongAns = 100 - (skippedAns+correctAns);
    return(
        <div id="summary">
            <img src={quizCompletedImage} alt="Trophy"/>
            <h2>Quiz Completed !</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>{skippedAns}%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{correctAns}%</span>
                    <span className='text'>answered correctly</span>
                </p>
                <p>
                    <span className='number'>{wrongAns}%</span>
                    <span className='text'>answered incorrectly</span>
                </p>
            </div>
            <ol>
               {
                userAnswers.map( (answer,index) =>{
                   let cssClasses = 'user-answer';
                   if(answer===null){
                    cssClasses+=' skipped';
                   }
                   else if(QUESTIONS[index].answers[0]===answer){
                    cssClasses+=' correct';
                   }
                   else{
                    cssClasses+=' wrong';
                   }

                 return (
                      <li key={index}> 
                          <h3>{index+1}</h3>
                          <p className='question'>{QUESTIONS[index].text}</p>
                          <p className={cssClasses}>{answer ?? 'Skipped'}</p>
                      </li>
                 );
                })
               }
            </ol>
        </div>
    );
}