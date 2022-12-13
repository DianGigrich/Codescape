import React from 'react';
import './style/NewPuzzle.css';
import { Box } from '@mui/material/';

export default function NewPuzzle () {

return (
    <div id='new-puzzle'>      
        {/* <Start/> */}
        <Box className='puzzle-container'>
            <div id='new-puzzle-timer-container'>
                <p id='new-puzzle-timer'>Timer</p>
            </div>
            <div id='new-puzzle-frame-container'>
                <iframe id='new-puzzle-frame' title='new-puzzle-image' src='/new-puzzle-frame' scrolling="no" style={{width: '800px', height: '652px', display: 'flex', justifySelf: 'space-around', overflow: 'hidden'}}/>
            </div>
        </Box>
    </div>
)
}