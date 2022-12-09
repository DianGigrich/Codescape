import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Container, Box, Stack, Button } from '@mui/material/'
import '../../index.css';
import * as interact from 'interactjs';

var element = document.getElementById('grid-snap')
var x = 0; var y = 0

// TODO: OBVIOUSLY A WORK IN PROGRESS

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
// interact(element)
//     .draggable({
//         modifiers: [
//             interact.modifiers.snap({
//                 targets: [
//                     interact.snappers.grid({ x: 30, y: 30 })
//                 ],
//                 range: Infinity,
//                 relativePoints: [{ x: 0, y: 0 }]
//             }),
//             interact.modifiers.restrict({
//                 restriction: element.parentNode,
//                 elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
//                 endOnly: true
//             })
//         ],
//         inertia: true
//     })
//     .on('dragmove', function (event) {
//         x += event.dx
//         y += event.dy

//         event.target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
//     })
// target elements with the "draggable" class
interact('.draggable')
    .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],
        // enable autoScroll
        autoScroll: true,

        listeners: {
            // call this function on every dragmove event
            move: dragMoveListener,

            // call this function on every dragend event
            end(event) {
                var textEl = event.target.querySelector('p')

                textEl && (textEl.textContent =
                    'moved a distance of ' +
                    (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                        Math.pow(event.pageY - event.y0, 2) | 0))
                        .toFixed(2) + 'px')
            }
        }
    })

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
// interact('.item').draggable({
//     onmove: (event) => {
//         const target = event.target;
//         const dataX = target.getAttribute('data-x');
//         const dataY = target.getAttribute('data-y');
//         console.log(dataX,dataY)
//         const initialX = parseFloat(dataX) || 0;
//         const initialY = parseFloat(dataY) || 0;

//         const deltaX= event.dx;
//         const deltaY = event.dy;

//         const newX = initialX + deltaX;
//         const newY = initialY + deltaY;

//         target
//         .style
//         .transform = `translate(${newX}px, ${newY}px)`;

//         target.setAttribute('data-x'. newX);
//         target.setAttribute('data-y', newY)
//     }
// })

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '#yes-drop',
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
        draggableElement.textContent = 'Dragged in'
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
        event.relatedTarget.textContent = 'Dragged out'
    },
    ondrop: function (event) {
        event.relatedTarget.textContent = 'Dropped'
    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
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

export default function Home() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);

    };

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
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        const Hi = "Welcome"
                    </Typography>
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
                <div className="draggable item" id='drag-1'> MOVE ME</div>
                <div id="no-drop" class="drag-drop"> #no-drop </div>

                <div id="yes-drop" class="drag-drop"> #yes-drop </div>

                <div id="outer-dropzone" class="dropzone">
                    #outer-dropzone
                    <div id="inner-dropzone" class="dropzone">#inner-dropzone</div>
                </div>
                <div id="grid-snap">
                    Dragging is constrained to the corners of a grid
                </div>
            </Box>

        </main>
    );
}
