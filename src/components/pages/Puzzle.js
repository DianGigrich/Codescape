import React, { useState } from 'react';

// import all of the images

// image 1 assets
import room from './../../assets/room.png';
import door from './../../assets/door.png';
import doorknob from './../../assets/doorknob.png';
import closedFileCabinet from './../../assets/filecabinetclosed.png';
import opneFileCabinet from './../../assets/fileCabinetOpen.png';
// import openDoor from './../../assets/openDoor.png';

// image 2 assets
import window from './../../assets/window.png';

// set state of interactable objects/image
const [currentFileCabinet, setFileCabinet] = useState(false)
const [currentBox, setBox] = useState(false)
const [currentTapeDispenser, setTapeDispenser] = useState(false)
// const [currentDoor, setDoor] = useState(false)

// set state of obtainable items
const [currentShreddedFile, setShreddedFile] = useState(false)
const [currentTapeRoll, setTapeRoll] = useState(false)
const [currentFile, setFile] = useState(false)
const [currentKey, setKey] = useState(false)



function Puzzle () {
    return (
<>      
        <Start/>
        <div className='puzzle-container'>
        <p id='puzzle-timer'>Timer</p>
        {/* div is shown/hidden based on state of current image */}
        <div id='puzzle-image-1'>
            <img className='room-img' src='./assets/room.png' alt='an empty room with red walls'/>
            <img id="door" src="./assets/door.png" alt="door"/>
            
            
            <img id="knob" src="./assets/doorknob.png" alt="doorknob"/>
                {/*changes source based on state*/}
            <img id="file-cabinet" src="./assets/filecabinetclosed.png" alt="file cabinet closed iwth a potted plant on top"/>
        </div>
         {/* div is shown/hidden based on state of current image */}
        <div id="puzzle-image-2">
            <img className='room-img' src='./assets/room.png' alt='an empty room with red walls'/>
            <img className="window" id="window-room-2" src="./assets/window.png" alt="window seperated into four panes"/>
            <img id="table" src="./assets/table.png" alt="empty table"/>
                {/*changes source based on state*/}
            <img id="tape-dispenser" src="./assets/tapedispenserEmpty.png" alt="empty tape dispenser"/>
        </div>
         {/* div is shown/hidden based on state of current image */}
        <div id="puzzle-image-3">
            <img className='room-img' src='./assets/room.png' alt='an empty room with red walls'/>
            <img className="window" id="window-room-3" src="./assets/window.png" alt="window seperated into four panes"/>
            <img id="utility-shelf" src="./assets/utilityShelf.png" alt="utility shelf with boxes"/>
                {/*changes source based on state*/}
            <img id="target-box" src="./assets/closedBox.png" alt="closed cardboard box"/>
        </div>
         {/* div is shown/hidden based on state of current image */}
        <div id="puzzle-image-4">
            <img className='room-img' src='./assets/room.png' alt='an empty room with red walls'/>
            <img className="window" id="window-room-4" src="./assets/window.png" alt="window seperated into four panes"/>
            <img id="shredder" src="./assets/shredder (1).png" alt="shredder"/>
        </div>
        {/* conditional rendering of items based on state/boolean*/}
        <div id='puzzle-inventory'>
            <img id="key" src="./assets/key.png" alt="key"/>
            <img id="file" src="./assets/file.png" alt="file"/>
            <img id="shredded-file" src="./assets/shreddedFile.png" alt="shredded file"/>
            <img id="tape-roll" src="./assets/tapeRoll.png" alt="tape roll"/>
        </div>
        <Question/>
    </div>
</>
    )
}

export default Puzzle;
