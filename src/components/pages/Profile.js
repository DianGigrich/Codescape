import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import API from "../../utils/API"
import { Box, Container, Typography, Stack, Button } from '@mui/material'

function Profile(props) {
  // const navigate = useNavigate();
  // useEffect(()=>{
  //     const storedToken = localStorage.getItem("token")
  //     if(storedToken){
  //       console.log(storedToken)
  //       API.getUserFromToken(storedToken).then(data=>{
  //         if(data.user){
  //           console.log(data)
  //           props.setToken(storedToken)
  //           props.setIsLoggedIn(true)
  //           props.setUserId(data.user.id)
  //           props.setUserName(data.user.username)
  //         } else {
  //             navigate("/login")
  //         }
  //       })
  //     } else {
  //       console.log('no stored token')
  //       navigate("/login")
  //     }
  //   },[])
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
            {/* TODO: MAKE SURE THIS BUTTON LINK WORKS, BECAUSE IT PREVIOUSLY HAS NOT */}
            <Button variant="contained" color="secondary"><Link to="/Puzzle">Escape Puzzle</Link></Button>
            <Button variant="outlined" color="secondary">Edit User Account</Button>
          </Stack>
        </Container>
      </Box>

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
