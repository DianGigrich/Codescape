import React from 'react';
// import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Container, Box, Stack, Button } from '@mui/material/'
import '../../index.css';
import * as interact from 'interactjs';




// TODO: OBVIOUSLY A WORK IN PROGRESS

// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
// }));


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
          restriction: 'self',
          endOnly: true
        })
      ],
      autoScroll: true,
      // dragMoveListener from the dragging demo above
      listeners: { move: dragMoveListener }
    })

    interact('.welcome')
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

    
export default function Home() {

    return (

        <main>
            {/* Hero unit */}
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Stack sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center" >
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        className="welcome"
                    >
                        const
                        </Typography>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        className="welcome"
                    >
                       Hi
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        className="welcome"
                    >
                        =
                    </Typography>
                   <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        className="welcome"
                    >
                        "Welcome"
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        className="welcome"
                    >
                        ;
                    </Typography>
                    </Stack>
                    <br />
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Play an escape room game to practice your javascript skills!  There are questions from beginner to advanced to help you improve.  Beat the time, escape the room, and practice, practice, practice!
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button variant="contained" color="secondary">This does nothing</Button>
                        <Button variant="outlined" color="secondary">This also does nothing</Button>
                    </Stack>

                </Container>
            </Box>

        </main>
    );
}
