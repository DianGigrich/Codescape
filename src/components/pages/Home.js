import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Container, Box, Stack, Button } from '@mui/material/'
import '../../index.css';



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
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        const Hi = "Welcome"
                    </Typography>
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
                <Container>
                    <div className="drag-drop" id='drag-1'> MOVE ME</div>
                    <div id="no-drop" className="drag-drop"> #no-drop </div>


                    <div id="second-dropzone" className="dropzone">
                        #outer-dropzone
                    </div>
                    <div id="yes-drop" className="drag-drop"> #yes-drop </div>
                    <Box id="grid-snap">
                    <div id="inner-dropzone" className="dropzone">#inner-dropzone</div>
                        Dragging is constrained to the corners of a grid
                    </Box>
                </Container>
            </Box>

        </main>
    );
}
