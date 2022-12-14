import React, { useState, useRef, useEffect } from 'react';
import './style/NewPuzzle.css';
import { Box } from '@mui/material/';


export default function NewPuzzle () {

    // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef(null);

    // The state for our timer
    const [timer, setTimer] = useState('00:00');
    localStorage.setItem("timer", timer)

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }


    const startTimer = (e) => {
        let { total, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {

            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }


    const clearTimer = (e) => {

        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next	
        setTimer('03:00');

        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();

        // This is where you need to adjust if
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 180);
        return deadline;
    }

    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible

    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
return (
    <div id='new-puzzle'>      
        {/* <Start/> */}
        <h3 className="puzzle-title">Castle of Chaos</h3>
        <Box className='puzzle-container'>
            <div id='new-puzzle-timer-container'>
                <p id='new-puzzle-timer'>
                <h2 id="timerId">Time Left:{timer}</h2>
                </p>
            </div>
            <div id='new-puzzle-frame-container'>
                <iframe id='new-puzzle-frame' title='new-puzzle-image' src='/new-puzzle-frame' scrolling="no" style={{width: '800px', height: '652px', display: 'flex', justifySelf: 'space-around', overflow: 'hidden'}}/>
            </div>
        </Box>
    </div>
)
}