import React, {useState} from 'react';
import './style/Puzzle.css';
import { Box, Button } from '@mui/material/';
import Question from '../Question'

// inventory assets
import key from './../../assets/key.png';
import file from './../../assets/file.png';
import shreddedFile from './../../assets/shreddedFile.png';
import tapeRoll from './../../assets/tapeRoll.png';

function Puzzle ({currentKey, currentFile, currentShreddedFile, currentTapeRoll }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    
// set state of puzzle
const [currentView, setView] = useState(1)

    return (
<>      
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
        <div style={{display: "block", backgroundColor: "gray", width: "50%", margin: "0 auto", textAlign: "center"}}>Inventory:<br/></div>
        <div id='puzzle-inventory-container'>
            <div id='puzzle-inventory'>
                <img id="key" src={key} alt="key" style={currentKey === false ? {visibility: "hidden"}: {}}/>
                <img id="file" src={file} alt="file" style={currentFile === false ? {visibility: "hidden"}: {}}/>
                <img id="shredded-file" src={shreddedFile} alt="shredded file" style={currentShreddedFile === false ? {visibility: "hidden"}: {}}/>
                <img id="tape-roll" src={tapeRoll} alt="tape roll" style={currentTapeRoll === false ? {visibility: "hidden"}: {}}/>
            </div>
        </div>
    </Box>
    
</>
    )
}

export default Puzzle;
