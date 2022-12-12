import React, { useEffect, useState } from 'react'
import {  useNavigate } from "react-router-dom"
import EditUser from '../EditUser'
import API from "../../utils/API"
import { Box, Container, Typography, Stack, Button, Card, Grid, CardMedia, CardContent } from '@mui/material'


function Profile(props) {
  const navigate = useNavigate();

  useEffect(()=>{

      const storedToken = localStorage.getItem("token")

      if(storedToken){
        console.log(storedToken)
        API.getUserFromToken(storedToken).then(data=>{
        
          if(data.user){
            console.log(data)
            props.setToken(storedToken)
            props.setIsLoggedIn(true)
            props.setUserId(data.user.id)
            props.setUserName(data.user.username)
          } else {
              navigate("/404")
          }
        })
      } else {
        console.log('no stored token')
        navigate("/login")
      }
    },[])

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

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
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Welcome {props.userName}!
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
            <Button variant="contained" color="secondary">Change Difficulty</Button>
            <Button variant="outlined" color="secondary"  onClick={handleOpen}>Edit User Account</Button>
              
          </Stack>
        </Container>
      </Box>
      {open && <EditUser open={open} setOpen={setOpen} userId={props.userId} />}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Room of Error
                </Typography>
                <Typography>
                  Can you escape within the time limit?
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: '56.25%',
                }}
                image="https://source.unsplash.com/random"
                alt="random"
                onClick={() => navigate('/Puzzle')}
              />
            </Card>

          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Future Puzzle
                </Typography>
                <Typography>
                  Because one puzzle isn't enough. Lets find some more fun ways to practice!
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: '56.25%',
                }}
                image="https://placekitten.com/200/"
                alt="random"
              />
            </Card>

          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.userName}'s Scores
                </Typography>
                <Typography>
                  This needs input
                </Typography>
              </CardContent>
            </Card>

          </Grid>

        </Grid>
      </Container>
    </main>
    //     {/* {
    //       props.isLoggedIn?(
    //       <div className="Profile">
    //       <h1></h1>

    //       </div>
    //       ):(
    //           <h1>Please wait, something may have gone wrong.</h1>
    //       )
    //   }
    //  */}
  )
}

export default Profile
