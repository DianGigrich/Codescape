import React, { useState } from 'react';
import './style/Puzzle.css';
import { Box } from '@mui/material/';



function Puzzle({ currentKey, currentFile, currentShreddedFile, currentTapeRoll }) {



    // set state of puzzle
    const [currentView, setView] = useState(1)

    return (
        <div id='puzzle'>


            <Box className='puzzle-container'>
                <div id='puzzle-timer-container'>
                    <p id='puzzle-timer'>Timer</p>
                </div>
                <div id='puzzle-frame-container'>
                    <iframe id='puzzle-frame' title='puzzle-image' src='/puzzle-frame/' scrolling="no" style={{ width: '800px', height: '652px', display: 'flex', justifySelf: 'space-around', overflow: 'hidden' }} />
                </div>



            </Box>

        </div>
    )
}

export default Puzzle;
