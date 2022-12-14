import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Stack, } from '@mui/material'
import Highscores from '../Highscores'
import API from '../../utils/API'

function Leaderboard(props) {
    const [highscore, setHighscores] = useState([])

    useEffect(() => {
        API.getHighscores(props).then(data => {
            console.log(data)
            setHighscores(data)
        })
    }, [props])
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
                        className="Highscores"
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
                        <Highscores
                            key={highscore.id}
                            id={highscore.id}
                            username={highscore.username}
                            time={highscore.value}
                            puzzle={highscore.puzzle} />
                    </Stack>
                </Container>

            </Box>
        </main>

    )
}

export default Leaderboard;
