import React, {useState} from 'react';

// import all of the images
// image 1 assets
import room from './../assets/room.png';
import door from './../assets/door.png';
import doorknob from './../assets/doorknob.png';
import closedFileCabinet from './../assets/filecabinetclosed.png';
import openFileCabinet from './../assets/fileCabinetOpen.png';
// import openDoor from './../../assets/openDoor.png';

// image 2 assets
import window from './../assets/window.png';
import table from './../assets/table.png';
import emptyTapeDispenser from './../assets/tapedispenserEmpty.png';
import fullTapeDispenser from './../assets/tapedispenserfull.png';

// image 3 assets
import utilityShelf from './../assets/utilityShelf.png';
import closedBox from './../assets/closedBox.png';
import openBox from './../assets/openBox.png';

// image 4 assets
import shredder from './../assets/shredder.png';
// import { createPortal } from 'react-dom';
// import { display } from '@mui/system';


export default function PuzzleImage ({setKey, currentKey, setFile, currentFile, setTapeRoll, currentTapeRoll, setShreddedFile, currentShreddedFile, funcHeader, funcFooter, funcNav}) {

funcHeader(false)
funcFooter(false)
funcNav(false)

setKey(true)
setFile(true)
setShreddedFile(true)
setTapeRoll(true)


// set state of puzzle
const [currentView, setView] = useState(1)

// // set state of interactable objects/image
const [currentFileCabinet, setFileCabinet] = useState(false)
const [currentTapeDispenser, setTapeDispenser] = useState(false)
const [currentBox, setBox] = useState(false)
// // const [currentDoor, setDoor] = useState(false)


const [correct, setCorrect] = useState(true)

function handleViewChangeNext () {
    if (currentView < 4) {
        setView(currentView + 1)
    } else {
        setView(1)
    }
}

function handleViewChangePrev () {
    if (currentView > 1) {
        setView(currentView - 1)
    } else {
        setView(4)
    }
}
const handleShreddedFileState = async () => {
    console.log('clicked!')
    if (correct) {
        setShreddedFile(true)
        console.log("handleShreddedFileState is working!")
    }
}

const handleTapeRollState = async () => {
    console.log("box clicked!")
    if (correct) {
        setTapeRoll(true)
        setBox(true)
        console.log("handleTapeRollState is working!")
    }
}

const handleFileState = async () => {
    console.log('clicked!')
    if (currentTapeDispenser === false) {
        alert("This tape dispenser is missing something...")
    } else if (currentShreddedFile === false) {
        alert("You can't put tape on that!")
    } else if (correct) {
        setShreddedFile(false)
        setFile(true)
        console.log("handleFileState is working!")
    }
}

const handleTapeDispenserState = async ()=> {
    console.log('clicked!')
    if (currentTapeRoll===false) {
        alert("This tape dispenser is empty...")
    } else if (currentShreddedFile === false) {
        alert("You can't put tape on that!")
    }
    else if (correct) {
        setTapeDispenser(true);
        setTapeRoll(false)
        console.log("handleTapeDispenserState is working!")
    }
}

const handleKeyState = async ()=> {
    console.log('clicked!')
    if(currentFile === false) {
        alert("This file cabinet is missing something...");
    } else if (correct) {
        setFile(false)
        setKey(true)
        console.log("handleKeyState is working!")
    }
}

function handleWin () {
    if (currentKey === false) {
        alert("This door is locked!")
    } else {
        alert("You've won!!!")
    }
}

return (
        
    <div id='puzzle-images'>
        <button id="prev-btn" onClick={handleViewChangePrev}>
            left
        </button>
        {/* <iframe title="title" src="./html or URl"/> */}
        <div id='puzzle-image-1' style={currentView === 1 ? {display:'inline'}: {display:'none'}}>
            <img className='room-img' src={room} alt='an empty room with red walls'/>
            <img id="door" src={door} alt="door" onClick={handleWin}/>
            <img id="knob" src={doorknob} alt="doorknob"/>
                {/*changes source based on state*/}
            <img className="file-cabinet" id='closed-file-cabinet' src={closedFileCabinet} style={currentFileCabinet === true ? {display: "none"} : {}} alt="file cabinet closed with a potted plant on top" onClick={handleKeyState}/>
            <img className="file-cabinet" id='open-file-cabinet'src={openFileCabinet} style={currentFileCabinet === false ? {display: "none"} : {}}alt="open file cabinet with a potted plant on top"/>
        </div>
        {/* div is shown/hidden based on state of current image */}
        <div id="puzzle-image-2" style={currentView === 2 ? {display:'inline'}: {display: 'none'}}>
            <img className='room-img' src={room} alt='an empty room with red walls'/>
            <img className="window" id="window-room-2" src={window} alt="window seperated into four panes"/>
            <img id="table" src={table} alt="empty table"/>
                {/*changes source based on state*/}
            <img class="tape-dispenser" id="tape-dispenser-empty" src={emptyTapeDispenser} style={currentTapeDispenser === true ? {display: "none"} : {}} alt="empty tape dispenser" onClick={handleTapeDispenserState}/>
            <img class="tape-dispenser" id="tape-dispenser-full" src={fullTapeDispenser} style={currentTapeDispenser === false ? {display: "none"}: {}}alt="full tape dispenser" onClick={handleFileState}/>
        </div>
        {/* div is shown/hidden based on state of current image */}
        <div id="puzzle-image-3" style={currentView === 3 ? {display:'inline'}: {display: 'none'}}>
            <img className='room-img' src={room} alt='an empty room with red walls'/>
            <img className="window" id="window-room-3" src={window} alt="window seperated into four panes"/>
            <img id="utility-shelf" src={utilityShelf} alt="utility shelf with boxes"/>
                {/*currentBox === false ? closedBox : openBox*/}
            <img className="box" id="closed-box" src={closedBox} style={currentBox === true ? {display: "none"} : {}} alt="closed cardboard box" onClick={handleTapeRollState}/>
            <img className="box" id="open-box" src={openBox} style={currentBox === false ? {display: "none"} : {}} alt="open cardboard box"/>
        </div>
        {/* div is shown/hidden based on state of current image */}
        <div id="puzzle-image-4" style={currentView === 4 ? {display:'inline'}: {display: 'none'}}>
            <img className='room-img' src={room} alt='an empty room with red walls'/>
            <img className="window" id="window-room-4" src={window} alt="window seperated into four panes"/>
            <img id="shredder" src={shredder} alt="shredder" onClick={handleShreddedFileState}/>
        </div>
        <button id="next-btn" onClick={handleViewChangeNext}>
            right
        </button>
    </div>
)
}