import React, {useState} from 'react';
import Question from './Question';
import { Button } from '@mui/material/';

// import all of the images
// image 1 assets
import castleWall from './../assets/NewPuzzle/castleWall.png';
import doorway from './../assets/NewPuzzle/doorway.png';
import chest from './../assets/NewPuzzle/chest.png';
import openChest from './../assets/NewPuzzle/openChest.png';

// image 2 assets
import wallShackles from './../assets/NewPuzzle/wallShackles.png';
import cauldron from './../assets/NewPuzzle/cauldron.png';
import tippedCauldron from './../assets/NewPuzzle/tippedCauldron.png';
import stool from './../assets/NewPuzzle/stool.png';

// image 3 assets
import barrel from './../assets/NewPuzzle/barrel.png';
import ropeCoil from './../assets/NewPuzzle/ropeCoil.png';

// image 4 assets
import tapestry from './../assets/NewPuzzle/tapestry.png';
import secretCompartment from './../assets/NewPuzzle/secretCompartment.png';

// inventory items
import doorKey from './../assets/NewPuzzle/doorKey.png';
import chestKey from './../assets/NewPuzzle/chestKey.png';
import bentNail from './../assets/NewPuzzle/bentNail.png';
import ropeFiber from './../assets/NewPuzzle/ropeFiber.png';
import nailString from './../assets/NewPuzzle/nail&string.png';
import sword from './../assets/NewPuzzle/sword.png';

export default function NewPuzzleFrame ({funcHeader, funcFooter, funcNav}) {

// question modal states?
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);

// gets rid of header, nav, footer in iframe
funcHeader(false)
funcFooter(false)
funcNav(false)

// popover
const [anchorEl, setAnchorEl] = useState(null);
const handlePopClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };
  const handlePopClose = () => {
    setAnchorEl(null);
  };
  const popopen = Boolean(anchorEl);
  const id = popopen ? 'simple-popover' : undefined;

// set state of puzzle
const [currentCastleView, setCastleView] = useState(1)

// set state of interactable objects/image
const [currentChest, setChest] = useState(false);
const [currentCauldron, setCauldron] = useState(false);
const [currentTapestry, setTapestry] = useState(false);

// set state of inventory items
const [currentDoorKey, setDoorKey] = useState(false);
const [currentChestKey, setChestKey] = useState(false);
const [currentBentNail, setBentNail] = useState(false);
const [currentSword, setSword] = useState(false);
const [currentRopeFiber, setRopeFiber] = useState(false);
const [currentNailString, setNailString] = useState(false);


// click events for right/left buttons
function handleViewChangeNext () {
    if (currentCastleView < 4) {
        setCastleView(currentCastleView + 1)
    } else {
        setCastleView(1)
    }
}

function handleViewChangePrev () {
    if (currentCastleView > 1) {
        setCastleView(currentCastleView - 1)
    } else {
        setCastleView(4)
    }
}

// click events
function handleDoorwayState () {
    if (currentDoorKey === true) {
        alert("You win!")
    } else {
        alert("The door is locked!")
    }
}

function handleChestState () {
    if (currentChestKey === true) {
        localStorage.setItem("click","chest")
        handleOpen()
    } else {
        alert("The chest is locked!")
    }
}

function handleCauldronState () {
    if (currentCauldron === true) {
        alert("you don't even want to know what the mysterious liquid is that spilled out of here...")
    } else if (currentRopeFiber === true){
        localStorage.setItem("click","cauldron and rope")
        handleOpen()
    } else {
        localStorage.setItem("click","cauldron")
        handleOpen()
    }
}

function handleShackles () {
    alert("They make a satisfying clanking sound but nothing happens")
}

function handleRopeCoilState () {
    if (currentSword === false) {
        alert("This rope couold be useful, but how?")
    } else if (currentRopeFiber === true) {
        alert("You already have all the rope fiber you need!")
    } else if (currentBentNail === true){
        localStorage.setItem("click","rope and nail")
        handleOpen()
    } else {
        localStorage.setItem("click","rope")
        handleOpen()
    }
}

function handleBarrelState () {
    if (currentDoorKey === true) {
        alert("You fished out the key from the bottom of the barrel!")
    } else if (currentNailString === false) {
        alert("You peek through the hole at the top and see something shiny at the bottom")
    } else {
        localStorage.setItem("click","barrel")
        handleOpen()
    }
}

function handleTapestryState () {
    if (currentTapestry === true) {
        alert("There is nothing left in the secret compartment except for some cobwebs")
    } else {
        localStorage.setItem("click","tapestry")
        handleOpen()
    }
}






return (
    <>
    {open && <Question open={open} setOpen={setOpen} setChest={setChest} setSword={setSword} setCauldron={setCauldron} setBentNail={setBentNail} setRopeFiber={setRopeFiber} setNailString={setNailString} setTapestry={setTapestry} setDoorKey={setDoorKey} setChestKey={setChestKey}/>}
    <div id='new-puzzle-images'>
        <button id="new-puzzle-prev-btn" onClick={handleViewChangePrev}>
            left
        </button>
        <div id='new-puzzle-image-1' style={currentCastleView === 1 ? {display:'inline'}: {display:'none'}}>
            <img className='castle-img' src={castleWall} alt='A gray brick castle wall'/>
            <img className='doorway' id='doorway' src={doorway} alt='a doorway that is blocked by a large piece of wood locked to the wall' onClick={handleDoorwayState}/>
            <img className='chest' id='closed-chest'src={chest} style={currentChest === true ? {display: "none"} : {}} alt='a locked trasure chest' onClick={handleChestState}/>
            <img className='chest' id='open-chest'src={openChest} style={currentChest === false ? {display: "none"} : {}} alt='an open trasure chest'/>
        </div>
        <div id='new-puzzle-image-2' style={currentCastleView === 2 ? {display:'inline'}: {display:'none'}}>
            <img className='castle-img' src={castleWall} alt='A gray brick castle wall'/>
            <img className='stool' id='stool' src={stool} alt='a three-legged brown stool'/>
            <img className='cauldron' id='upright-cauldron'src={cauldron} style={currentCauldron === true ? {display: "none"} : {}} alt='a black cauldron' onClick={handleCauldronState}/>
            <img className='cauldron' id='tipped-cauldron'src={tippedCauldron} style={currentCauldron === false ? {display: "none"} : {}} alt='a tipped over black cauldron with green liquid spilled out' onClick={handleCauldronState}/>
            <img className='wall-shackles' id='wall-shackles' src={wallShackles} alt='a set of shackles bolted to the wall' onClick={handleShackles}/>
        </div>
        <div id='new-puzzle-image-3' style={currentCastleView === 3 ? {display:'inline'}: {display:'none'}}>
            <img className='castle-img' src={castleWall} alt='A gray brick castle wall'/>
            <img className='rope-coil' id='rope-coil'src={ropeCoil} alt='a coil of rope' onClick={handleRopeCoilState}/>
            <img className='barrel' id='barrel'src={barrel} alt='a barrel with a small hole on top' onClick={handleBarrelState}/>
        </div>
        <div id='new-puzzle-image-4' style={currentCastleView === 4 ? {display:'inline'}: {display:'none'}}>
            <img className='castle-img' src={castleWall} alt='A gray brick castle wall'/>
            <img className='tapestry' id='tapestry'src={tapestry} style={currentTapestry === true ? {display: "none"} : {}} alt='a decorative tapestry' onClick={handleTapestryState}/>
            <img className='tapestry' id='secret-compartment'src={secretCompartment} style={currentTapestry === false ? {display: "none"} : {}} alt='a secret compartment is revealed when the tapestry is pulled to the side' onClick={handleTapestryState}/>
        </div>
        <button id="new-puzzle-next-btn" onClick={handleViewChangeNext}>
            right
        </button>
    </div>
    <div style={{display: "block", backgroundColor: "gray", width: "50%", margin: "0 auto", textAlign: "center"}}>Inventory:<br/></div>
        <div id='puzzle-inventory-container'>
            <div id='puzzle-inventory'>
                <img id="door-key" src={doorKey} alt="gold key" style={currentDoorKey === false ? {visibility: "hidden", height: "50px"}: {height: "50px"}}/>
                <img id="chest-key" src={chestKey} alt="silver key" style={currentChestKey === false ? {visibility: "hidden", height: "50px"}: {height: "50px"}}/>
                <img id="sword" src={sword} alt="sword" style={currentSword === false ? {visibility: "hidden", height: "50px"}: {height: "50px"}}/>
                <img id="bent-nail" src={bentNail} alt="bent nail" style={currentBentNail === false ? {visibility: "hidden", height: "50px"}: {height: "50px"}}/>
                <img id="rope-fiber" src={ropeFiber} alt="fiber from a rope" style={currentRopeFiber === false ? {visibility: "hidden", height: "50px"}: {height: "50px"}}/>
                <img id="nail-string" src={nailString} alt="string tied around a bent nail" style={currentNailString === false ? {visibility: "hidden", height: "50px"}: {height: "50px"}}/>
            </div>
        </div>
    </>
    )
}