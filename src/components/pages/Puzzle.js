import React from 'react';

import room from './../../assets/room.png'

function Puzzle () {
    return (
        <div className='puzzle-container'>
            <p className='puzzle-timer'>Timer</p>
            <div className='puzzle-image'>
                <img id='room-img' src='room' alt='an empty room with red walls'/>
            </div>
            <div className='puzzle-inventory'>
                {/* {conditional rendering of items} */}
            </div>
        </div>
    )
}

export default Puzzle;
