import React from 'react';
import { Container, Box, Typography, Card, Grid, CardContent } from '@mui/material'



function AboutUs() {

    return (

        <main>
            <Box sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
            >
                <Container>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        className="welcome"
                    >
                        Behind the Scenes
                    </Typography>
                </Container>
               
                    <Grid container spacing={2} sx={{ py: 8, bgcolor: "#83ccc5"}}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >

                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                       Machiko Carroll
                                    </Typography>
                                    <Typography>
                                        Has things to say!
                                    </Typography>
                                </CardContent>
                            </Card>

                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Pooja Agarwal
                                    </Typography>
                                    <Typography>
                                        Also has something to say!
                                    </Typography>
                                </CardContent>
                            </Card>

                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Kristen Killingsworth
                                    </Typography>
                                    <Typography>
                                        I'm a UW grad with a bachelor's in fine arts. I graduated at the end of 2020 and the pandemic definitely affected my post-grad plans. I decided to make a change and signed up for a coding bootcamp. Now we are here and I'm making awesome websites like this one!
                                    </Typography>
                                    <br/>
                                    <Typography>
                                        On a more personal note, I have one cat and my hobbies include knitting and crochet. I haven't had much time to work on those hobbies outside of the bootcamp, so I am looking forward to some free time to work on my projects that have been neglected for three months. 
                                    </Typography>
                                </CardContent>
                            </Card>

                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >

                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Dian Gigrich
                                    </Typography>
                                    <Typography>
                                        I have three cats, one dog, nine chickens, one hamster, an apiary and one medium-sized child.  I am a video games, board games, and puzzles enthusiast.
                                    </Typography>
                                    <Typography>
                                        Having just graduated Full Stack Coding Bootcamp, I hope to make more websites and money to support my menagerie.  Maybe my daughter will want to learn how to code!
                                    </Typography>
                                </CardContent>
                            </Card>

                        </Grid>
                    </Grid>
                
            </Box>
        </main>

    )
}

export default AboutUs;
