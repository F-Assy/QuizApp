import { useEffect,useState } from "react";

export default function QuestionTimer({timeout, ontTimeOut, mode}){
   const[remainingTime, setRemainingTime] = useState(timeout);

   useEffect(()=>{       
       const timer = setTimeout( ()=>{  
           ontTimeOut();
       }, timeout);

       return ()=>{
        clearTimeout(timer);
       }
   }
   ,[timeout,ontTimeOut]);

   useEffect(()=>{
       const interval = setInterval(()=>{
        setRemainingTime( previousState => (previousState-100));
       } , 100);

       return ()=>{
        clearInterval(interval);
       };
   },[]);

   return <progress id = "question-time" value={remainingTime} max={timeout} className={mode}/>
}