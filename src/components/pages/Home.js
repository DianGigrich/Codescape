import React from 'react';
// import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Container, Box, Stack, Button } from '@mui/material/'
import '../../index.css';



    
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
