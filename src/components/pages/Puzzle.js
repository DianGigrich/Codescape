import React, { useState } from 'react';
import './style/Puzzle.css';
import Box from '@mui/material/box';

// inventory assets
import key from './../../assets/key.png';
import file from './../../assets/file.png';
import shreddedFile from './../../assets/shreddedFile.png';
import tapeRoll from './../../assets/tapeRoll.png';

function Puzzle () {
// set state of puzzle
const [currentView, setView] = useState(1)

// // set state of interactable objects/image
const [currentFileCabinet, setFileCabinet] = useState(false)
const [currentTapeDispenser, setTapeDispenser] = useState(false)
// const [currentBox, setBox] = useState(false)
// // const [currentDoor, setDoor] = useState(false)

// // set state of obtainable items
// const [currentShreddedFile, setShreddedFile] = useState(false)
// const [currentTapeRoll, setTapeRoll] = useState(false)
// const [currentFile, setFile] = useState(false)
// const [currentKey, setKey] = useState(false)


function handleFileCabinetState () {

}

function handleTapeDispenserState () {

}

function handleBoxState () {

}



    return (
<>      
        {/* <Start/> */}
        
        <Box className='puzzle-container'>
        <div id='puzzle-timer-container'>
            <p id='puzzle-timer'>Timer</p>
        </div>
        <div id='puzzle-frame-container'>
            <iframe id='puzzle-frame' title='puzzle-image' src='/puzzle-frame/' style={{width: '600px', height: '600px', display: 'flex', justifySelf: 'space-around'} }/>
        </div>
        {/* <Question/> */}
        <div id='puzzle-inventory-container'>
            <div id='puzzle-inventory'>
                <img id="key" src={key} alt="key"/>
                <img id="file" src={file} alt="file"/>
                <img id="shredded-file" src={shreddedFile} alt="shredded file"/>
                <img id="tape-roll" src={tapeRoll} alt="tape roll"/>
            </div>
        </div>
    </Box>
    
</>
    )
}

export default Puzzle;
