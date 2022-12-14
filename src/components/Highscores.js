import * as React from 'react';
import { Typography, Avatar, Stack, Container } from '@mui/material/';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEvents';


export default function Highscores(props) {

    return (
        <Stack sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
        ><Avatar sx={{ bgcolor: 'secondary.main' }}>
                <EmojiEventsTwoToneIcon />
            </Avatar>
            <Container direction="row">
                <Typography variant="h4">

                    {props.username}
                </Typography>
            </Container>
            <Container>
            <Typography>
                .....................................................
            </Typography>
            </Container>
            <Container>
                <Typography variant="h4">

                    {props.time}
                </Typography>
            </Container>
        </Stack>
    );
}

