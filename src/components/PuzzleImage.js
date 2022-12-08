import React, {useState} from 'react';
// import ReactDOM from "react-dom/client"; 
import Button from '@mui/material/button';

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
// import openBox from './../assets/OpenBox.png';

// image 4 assets
import shredder from './../assets/shredder.png';
import { createPortal } from 'react-dom';


export default function PuzzleImage ({funcHeader, funcFooter, funcNav}) {

funcHeader(false)
funcFooter(false)
funcNav(false)


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

function handleFileCabinetState () {

}

function handleTapeDispenserState () {

}

function handleBoxState () {

}

return (
        
    <div id='puzzle-images'>
        <Button id="prev-btn" onClick={handleViewChangePrev}>
            left
        </Button>
        {/* <iframe title="title" src="./html or URl"/> */}
        <div id='puzzle-image-1' style={currentView === 1 ? {display:'inline'}: {display:'none'}}>
            <img className='room-img' src={room} alt='an empty room with red walls'/>
            <img id="door" src={door} alt="door"/>
            <img id="knob" src={doorknob} alt="doorknob"/>
                {/*changes source based on state*/}
            <img id="file-cabinet" src={currentFileCabinet === false ? closedFileCabinet : openFileCabinet} alt="file cabinet closed iwth a potted plant on top"/>
        </div>
        {/* div is shown/hidden based on state of current image */}
        <div id="puzzle-image-2" style={currentView === 2 ? {display:'inline'}: {display: 'none'}}>
            <img className='room-img' src={room} alt='an empty room with red walls'/>
            <img className="window" id="window-room-2" src={window} alt="window seperated into four panes"/>
            <img id="table" src={table} alt="empty table"/>
                {/*changes source based on state*/}
            <img id="tape-dispenser" src={currentTapeDispenser === false ? emptyTapeDispenser : fullTapeDispenser} alt="empty tape dispenser"/>
        </div>
        {/* div is shown/hidden based on state of current image */}
        <div id="puzzle-image-3" style={currentView === 3 ? {display:'inline'}: {display: 'none'}}>
            <img className='room-img' src={room} alt='an empty room with red walls'/>
            <img className="window" id="window-room-3" src={window} alt="window seperated into four panes"/>
            <img id="utility-shelf" src={utilityShelf} alt="utility shelf with boxes"/>
                {/*currentBox === false ? closedBox : openBox*/}
            <img id="target-box" src={closedBox} alt="closed cardboard box"/>
        </div>
        {/* div is shown/hidden based on state of current image */}
        <div id="puzzle-image-4" style={currentView === 4 ? {display:'inline'}: {display: 'none'}}>
            <img className='room-img' src={room} alt='an empty room with red walls'/>
            <img className="window" id="window-room-4" src={window} alt="window seperated into four panes"/>
            <img id="shredder" src={shredder} alt="shredder"/>
        </div>
        <Button id="next-btn" onClick={handleViewChangeNext}>
            right
        </Button>
    </div>
)
}