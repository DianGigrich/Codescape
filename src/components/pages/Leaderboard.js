import React from 'react';
import { Container, Box, Typography, Stack, Avatar } from '@mui/material'
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';


function Leaderboard() {

    return (

        <main>
            <Box sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}>
                <Container>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        className="welcome"
                    >
                        Highscores
                    </Typography>
                </Container>
                <Container >
                    <Stack sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Avatar sx={{ bgcolor: 'secondary.main' }}>
                            <EmojiEventsTwoToneIcon />
                        </Avatar>
                        <Typography variant="h4">
                            Kathy Bates :

                        </Typography>
                        <Typography variant="h4">
                            12:24 :
                        </Typography>
                        <Typography variant="h4">
                            Room of Error
                        </Typography>
                    </Stack>
                </Container>

            </Box>
        </main>

    )
}

export default Leaderboard;
