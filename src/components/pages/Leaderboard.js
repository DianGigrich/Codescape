import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, } from '@mui/material'
import Highscores from '../Highscores'
import API from '../../utils/API'

function Leaderboard(props) {
    const [highscores, setHighscores] = useState([])

    useEffect(() => {
        API.getHighscores(props).then(data => {
            console.log(data)
            setHighscores(data)
        })
    }, [props])
    console.log(highscores)
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
                    
                    {highscores.map((item) => (
                        <Highscores
                            key={item.id}
                            id={item.id}
                            username={item.user.username}
                            time={item.value}
                        />
                    ))
                    }

                </Container>

            </Box>
        </main>

    )
}

export default Leaderboard;
