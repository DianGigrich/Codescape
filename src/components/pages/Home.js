import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Container, Box, Stack, Button } from '@mui/material/'

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
                        Play an escape room game to practice your javascript skills!  There are questions from beginner to advanced to helpe you improve.  Beat the time, escape the room, and practice, practice, practice!
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
