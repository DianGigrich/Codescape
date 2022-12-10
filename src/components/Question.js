import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material/'
import '../index.css';
import * as interact from 'interactjs';

function dragMoveListener(event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener

interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: ['#pizza-drop', '#pasta-drop'],

  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active')
  },

  ondragenter: function (event) {
  var draggableElement = event.relatedTarget
  var dropzoneElement = event.target

  // feedback the possibility of a drop
  dropzoneElement.classList.add('drop-target')
  draggableElement.classList.add('can-drop')
  },

  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target')
    event.relatedTarget.classList.remove('can-drop')
  },

  ondrop: function (event) {
    if (event.target.innerText === 'Pizza' && event.relatedTarget.innerText === "Pizza") {
      event.relatedTarget.classList.remove('drag-drop')
      
      event.relatedTarget.classList.add('drag-stop')
      
    } else {
      event.relatedTarget.classList.remove('drop-active')
      event.relatedTarget.classList.remove('drop-target')
      event.relatedTarget.classList.add('drop-wrong')
    }
  },

  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')
    event.target.classList.add('drop-wrong')
  }
})

interact('.drag-drop')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { move: dragMoveListener }
  })

export default function Question({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{

            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography component="h1" variant="h5">
            Question
          </Typography>
          <Typography component="h1" variant="h5">
            How many licks does it take to get to the center of a tootsie pop?
          </Typography>
          <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
          <div id="inner-dropzone" className="dropzone">Pizza </div>
          <div id="second-dropzone" className="dropzone">Pasta </div>
          <div id="pizza-drop" className="drag-drop"> Pizza </div>
          <div id="pasta-drop" className="drag-drop"> Pasta </div>

                    </Stack>

          <Button type="submit" variant="contained" color="primary" sx={{ mt: 3, mb: 2 }} onClick={handleClose}>Button</Button>
        </Box>
      </Modal>
    </div >
  );
}
