import React, {useState} from 'react';
import './style/Puzzle.css';
import { Box, Button } from '@mui/material/';
import Question from '../Question'


function Puzzle ({currentKey, currentFile, currentShreddedFile, currentTapeRoll }) {
// question modal states?
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);

// set state of puzzle
const [currentView, setView] = useState(1)

    return (
<div id='puzzle'>      
        {/* <Start/> */}
        
        <Box className='puzzle-container'>
        <div id='puzzle-timer-container'>
            <p id='puzzle-timer'>Timer</p>
        </div>
        <div id='puzzle-frame-container'>
            <iframe id='puzzle-frame' title='puzzle-image' src='/puzzle-frame/' scrolling="no" style={{width: '800px', height: '652px', display: 'flex', justifySelf: 'space-around', overflow: 'hidden'}}/>
        </div>
        {/* TODO:<Question/> */}
        <Button onClick={handleOpen}>QUESTION BUTTON</Button>
    {open && <Question open={open} setOpen={setOpen} />}
        
    </Box>
    
</div>
    )
}

export default Puzzle;
