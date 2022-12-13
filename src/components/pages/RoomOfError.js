import React from 'react';
import './style/RoomOfError.css';
import { Box } from '@mui/material/';
import Timer from './../Timer'


function RoomOfError () {

    return (
<div id='puzzle'>      
        {/* <Start/> */}
        
        <Box className='puzzle-container'>
        <div id='puzzle-timer-container'>
            <p id='puzzle-timer'>
                Time Left: <Timer max={300}/>
            </p>
        </div>
        <div id='room-of-error-frame-container'>
            <iframe id='room-of-error-frame' title='room-of-error-image' src='/room-of-error-frame' scrolling="no" style={{width: '800px', height: '652px', display: 'flex', justifySelf: 'space-around', overflow: 'hidden'}}/>
        </div>
        {/* TODO:<Question/> */}

        
    </Box>
    
</div>
    )
}

export default RoomOfError;
