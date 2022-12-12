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
                                        My coding journey has just begun! I enjoy going for a walk with my family including our Pomeranian! My kids and the pup keep me busy everyday. 
                                    </Typography>
                                    <br></br>
                                    <Typography>
                                       My background is Accounting. There are so many things to be automated. One day I will create apps to help my accounting friends! 
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
                                        This needs input
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
