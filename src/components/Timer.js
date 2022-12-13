import React, {useState, useEffect} from 'react'


function Timer ({max}) {
    const [counter, setCounter] = useState(max);
    useEffect(() =>{
        if(counter > 0){
            setTimeout(()=>setCounter(counter - 1), 1000);
        }
    },[counter]);
    return(
        <span>
            {counter}
        </span>
    )
}

export default Timer;