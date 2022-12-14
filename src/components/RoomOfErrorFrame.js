import React, { useState, useEffect } from 'react';
import Question from './Question';
import { Popper, Box } from '@mui/material/';

// import all of the images
// image 1 assets
import room from './../assets/RoomOfError/room.png';
import door from './../assets/RoomOfError/door.png';
import doorknob from './../assets/RoomOfError/doorknob.png';
import closedFileCabinet from './../assets/RoomOfError/filecabinetclosed.png';
import openFileCabinet from './../assets/RoomOfError/fileCabinetOpen.png';
// import openDoor from './../../assets/RoomOfError/openDoor.png';

// image 2 assets
import window from './../assets/RoomOfError/window.png';
import table from './../assets/RoomOfError/table.png';
import emptyTapeDispenser from './../assets/RoomOfError/tapedispenserEmpty.png';
import fullTapeDispenser from './../assets/RoomOfError/tapedispenserfull.png';

// image 3 assets
import utilityShelf from './../assets/RoomOfError/utilityShelf.png';
import closedBox from './../assets/RoomOfError/closedBox.png';
import openBox from './../assets/RoomOfError/openBox.png';

// image 4 assets
import shredder from './../assets/RoomOfError/shredder.png';
import openShredder from './../assets/RoomOfError/openShredder.png';
// import { createPortal } from 'react-dom';
// import { display } from '@mui/system';

// inventory assets
import key from './../assets/RoomOfError/key.png';
import file from './../assets/RoomOfError/file.png';
import shreddedFile from './../assets/RoomOfError/shreddedFile.png';
import tapeRoll from './../assets/RoomOfError/tapeRoll.png';



export default function RoomOfErrorFrame({ handlePostHighscores, funcHeader, funcFooter, funcNav, props }) {


    // question modal states?
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    // gets rid of header, nav, footer in iframe
    funcHeader(false)
    funcFooter(false)
    funcNav(false)

    const [anchorEl, setAnchorEl] = useState(null);
    // const [openPopper, setOpenPopper] = useState(false);
    const openPopper = Boolean(anchorEl)

    const [currentTarget, setTarget] = useState("")

    // set state of puzzle
    const [currentView, setView] = useState(1)

    // inventory item states
    const [currentShreddedFile, setShreddedFile] = useState(false)
    const [currentTapeRoll, setTapeRoll] = useState(false)
    const [currentFile, setFile] = useState(false)
    const [currentKey, setKey] = useState(false)

    // // set state of interactable objects/image
    const [currentFileCabinet, setFileCabinet] = useState(false)
    const [currentTapeDispenser, setTapeDispenser] = useState(false)
    const [currentBox, setBox] = useState(false)
    const [currentShredder, setShredder] = useState(false);
    // // const [currentDoor, setDoor] = useState(false)
    let isCorrect = localStorage.getItem("correct")

    // click events for right/left buttons
    function handleViewChangeNext() {
        if (currentView < 4) {
            setView(currentView + 1)
        } else {
            setView(1)
        }
    }

    function handleViewChangePrev() {
        if (currentView > 1) {
            setView(currentView - 1)
        } else {
            setView(4)
        }
    }

    // click events for assets


    const handleTapeRollState = async () => {
        localStorage.setItem("click", "box")
        handleOpen()
    }

    const handleShreddedFileState = async () => {
        console.log('clicked!');
        handleOpen();
        localStorage.setItem("click", "shredder");
    }

    const handleFileState = async (e) => {
        console.log('clicked!')
        if (currentTapeDispenser === false) {
            setAnchorEl(anchorEl ? null : e.currentTarget);
            setTarget(e.currentTarget.id)
        } else if (currentShreddedFile === false) {
            setAnchorEl(anchorEl ? null : e.currentTarget);
            setTarget(e.currentTarget.id)
        } else {
            handleOpen()
            localStorage.setItem("click", "tapeDispenser")
            console.log("handleFileState is working!")
        }
    }

    const handleTapeDispenserState = async (e) => {
        console.log('clicked!')
        if (currentTapeRoll === false) {
            setAnchorEl(anchorEl ? null : e.currentTarget);
            setTarget(e.currentTarget.id)
        } else if (currentShreddedFile === false) {
            setAnchorEl(anchorEl ? null : e.currentTarget)
            setTarget(e.currentTarget.id)
        }
        else {
            handleOpen()
            localStorage.setItem("click", "emptyTapeDispenser")
            console.log("handleTapeDispenserState is working!")
        }
    }

    const handleKeyState = async (e) => {
        console.log('clicked!')

        if (currentFile === false) {
            setAnchorEl(anchorEl ? null : e.currentTarget)
            setTarget(e.currentTarget.id)
        } else {
            handleOpen()
            localStorage.setItem("click", "fileCabinet")
            console.log("handleKeyState is working!")
        }
        let scoreid = 0;
        let userid = "";

        const postTheScore = e => {

            console.log(scoreid, userid, "im here now")
            handlePostHighscores({
                value: scoreid,
                user_id: userid,
            });
        }

        function handleWin(e) {
            if (currentKey === false) {
                setAnchorEl(anchorEl ? null : e.currentTarget)
                setTarget(e.currentTarget.id)
                console.log("you dont have they key")
            } else {

                userid = parseInt(localStorage.getItem("userid"))
                scoreid = localStorage.getItem("timer")

                console.log("you win")
                postTheScore()
                alert("You've won!!!")
            }
        }

        function popperText(targetId) {
            console.log(targetId)
            if (currentTarget === "door") {
                return "The door is locked!"
            } else if (currentTarget === "tape-dispenser-empty") {
                return "The tape dispenser is missing something..."
            } else if (currentTarget === "tape-dispenser-full") {
                return "You don't have anything to tape"
            } else if (currentTarget === "closed-file-cabinet") {
                console.log(currentTarget)
                return "The file cabinet is missing something"
            } else {
                console.log("failed!")
            }
        }

        return (
            <>
                {/* <Button onClick={handleOpen}>QUESTION BUTTON</Button> */}
                {open && <Question open={open} setOpen={setOpen} setTapeRoll={setTapeRoll} setBox={setBox} setShreddedFile={setShreddedFile} setShredder={setShredder} setFile={setFile} setKey={setKey} setTapeDispenser={setTapeDispenser} setFileCabinet={setFileCabinet} />}
                <div id='puzzle-images'>
                    <button id="prev-btn" onClick={handleViewChangePrev}>
                        left
                    </button>
                    {/* <iframe title="title" src="./html or URl"/> */}
                    <div id='puzzle-image-1' style={currentView === 1 ? { display: 'inline' } : { display: 'none' }}>
                        <img className='room-img' src={room} alt='an empty room with red walls' />
                        <img id="door" src={door} alt="door" onClick={handleWin} aria-describedby="popper" />
                        <img id="knob" src={doorknob} alt="doorknob" />
                        {/*changes source based on state*/}
                        <img className="file-cabinet" id='closed-file-cabinet' src={closedFileCabinet} style={currentFileCabinet === true ? { display: "none" } : {}} alt="file cabinet closed with a potted plant on top" onClick={handleKeyState} aria-describedby="popper" />
                        <img className="file-cabinet" id='open-file-cabinet' src={openFileCabinet} style={currentFileCabinet === false ? { display: "none" } : {}} alt="open file cabinet with a potted plant on top" />
                    </div>
                    {/* div is shown/hidden based on state of current image */}
                    <div id="puzzle-image-2" style={currentView === 2 ? { display: 'inline' } : { display: 'none' }}>
                        <img className='room-img' src={room} alt='an empty room with red walls' />
                        <img className="window" id="window-room-2" src={window} alt="window seperated into four panes" />
                        <img id="table" src={table} alt="empty table" />
                        {/*changes source based on state*/}
                        <img className="tape-dispenser" id="tape-dispenser-empty" src={emptyTapeDispenser} style={currentTapeDispenser === true ? { display: "none" } : {}} alt="empty tape dispenser" onClick={handleTapeDispenserState} aria-describedby="popper" />
                        <img className="tape-dispenser" id="tape-dispenser-full" src={fullTapeDispenser} style={currentTapeDispenser === false ? { display: "none" } : {}} alt="full tape dispenser" onClick={handleFileState} aria-describedby="popper" />
                    </div>
                    {/* div is shown/hidden based on state of current image */}
                    <div id="puzzle-image-3" style={currentView === 3 ? { display: 'inline' } : { display: 'none' }}>
                        <img className='room-img' src={room} alt='an empty room with red walls' />
                        <img className="window" id="window-room-3" src={window} alt="window seperated into four panes" />
                        <img id="utility-shelf" src={utilityShelf} alt="utility shelf with boxes" />
                        {/*currentBox === false ? closedBox : openBox*/}
                        <img className="box" id="closed-box" src={closedBox} style={currentBox === true ? { display: "none" } : {}} alt="closed cardboard box" onClick={handleTapeRollState} />
                        <img className="box" id="open-box" src={openBox} style={currentBox === false ? { display: "none" } : {}} alt="open cardboard box" />
                    </div>
                    {/* div is shown/hidden based on state of current image */}
                    <div id="puzzle-image-4" style={currentView === 4 ? { display: 'inline' } : { display: 'none' }}>
                        <img className='room-img' src={room} alt='an empty room with red walls' />
                        <img className="window" id="window-room-4" src={window} alt="window seperated into four panes" />
                        <img id="shredder" src={shredder} alt="shredder" style={currentShredder === true ? { display: 'none' } : {}} onClick={handleShreddedFileState} />
                        <img id="open-shredder" src={openShredder} alt="shredder with top off" style={currentShredder === false ? { display: 'none' } : {}} />
                    </div>
                    <button id="next-btn" onClick={handleViewChangeNext}>
                        right
                    </button>
                </div>
                <div style={{ display: "block", backgroundColor: "gray", width: "50%", margin: "0 auto", textAlign: "center" }}>Inventory:<br /></div>
                <div id='puzzle-inventory-container'>
                    <div id='puzzle-inventory'>
                        <img id="key" src={key} alt="key" style={currentKey === false ? { visibility: "hidden", height: "50px" } : { height: "50px" }} />
                        <img id="file" src={file} alt="file" style={currentFile === false ? { visibility: "hidden", height: "50px" } : { height: "50px" }} />
                        <img id="shredded-file" src={shreddedFile} alt="shredded file" style={currentShreddedFile === false ? { visibility: "hidden", height: "50px" } : { height: "50px" }} />
                        <img id="tape-roll" src={tapeRoll} alt="tape roll" style={currentTapeRoll === false ? { visibility: "hidden", height: "50px" } : { height: "50px" }} />
                    </div>
                </div>
                <Popper id="popper" open={openPopper} anchorEl={anchorEl}>
                    <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                        {popperText()}
                    </Box>
                </Popper>
            </>
        )
    }
}