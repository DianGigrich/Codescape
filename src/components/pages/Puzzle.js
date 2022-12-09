import React, {useRef, useEffect} from 'react';
import './style/Puzzle.css';
import { Box } from '@mui/material/';

// inventory assets
import key from './../../assets/key.png';
import file from './../../assets/file.png';
import shreddedFile from './../../assets/shreddedFile.png';
import tapeRoll from './../../assets/tapeRoll.png';

function Puzzle () {

    const iframeRef = useRef(null)
    function listenKey () {

    }
    function listenFile () {

    }
    function listenShreddedFile () {

    }
    function listenTapeRoll () {

    }
    return (
<>      
        {/* <Start/> */}
        
        <Box className='puzzle-container'>
        <div id='puzzle-timer-container'>
            <p id='puzzle-timer'>Timer</p>
        </div>
        <div id='puzzle-frame-container'>
            <iframe ref={iframeRef} id='puzzle-frame' title='puzzle-image' src='/puzzle-frame/' scrolling="no" style={{width: '800px', height: '652px', display: 'flex', justifySelf: 'space-around', overflow: 'hidden'}}/>
        </div>
        {/* <Question/> */}
        {/* style={currentKey === false ? {display: "none"}: {}} 
        style={currentFile === false ? {display: "none"}: {}}
        style={currentShreddedFile === false ? {display: "none"}: {}}
        style={currentTapeRoll === false ? {display: "none"}: {}}*/}
        <div id='puzzle-inventory-container'>
            <div id='puzzle-inventory'>
                <img id="key" src={key} alt="key" />
                <img id="file" src={file} alt="file" />
                <img id="shredded-file" src={shreddedFile} alt="shredded file" />
                <img id="tape-roll" src={tapeRoll} alt="tape roll" />
            </div>
        </div>
    </Box>
    
</>
    )
}

export default Puzzle;
