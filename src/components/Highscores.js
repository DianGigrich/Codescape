import * as React from 'react';
import { Typography, Avatar } from '@mui/material/';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEvents';


export default function Highscores(props) {

    return (
        <>
            <Avatar sx={{ bgcolor: 'secondary.main' }}>
                <EmojiEventsTwoToneIcon />
            </Avatar>
            <Typography variant="h4">
                Kathy Bates :
                {props.username}
            </Typography>
            <Typography variant="h4">
                12:24 :
                {props.time}
            </Typography>
        </>
    );
}

