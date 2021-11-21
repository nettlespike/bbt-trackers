import React, { useState, useEffect } from "react";
export default function Counter (props){

    const [counter, setCounter] = useState(props.startingMoney);

    useEffect(() => {
      if(Math.abs(counter - props.total) > Number.EPSILON) {  
          
        const timeout = setTimeout(() => {
            const tmp = counter + 0.01;
            tmp = Math.round((tmp + Number.EPSILON) * 1000) / 1000;
            setCounter(tmp);
        }, 1);
    
        return () => {
            clearTimeout(timeout);
        };
      }
    }, [counter]);
   
    return (    
    <div className="">
        <p className="font-sans">${counter}</p>
    </div>
    )
}