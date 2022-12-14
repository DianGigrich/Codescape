import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import EditUser from '../EditUser'
import API from "../../utils/API"
import { Box, Container, Typography, Stack, Button, Card, Grid, CardMedia, CardContent, FormControl, MenuItem, InputLabel, Select } from '@mui/material'


function Profile(props) {
  const navigate = useNavigate();

  // select difficult list
  const level = localStorage.getItem("difficulty")
  const [difficulty, setDifficulty] = useState(level);

  const handleLevelChange = (event) => {
    var thishere = event.target.value
    setDifficulty(thishere);
     localStorage.setItem("difficulty", thishere)
  };

  // delete modal open
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);



  useEffect(() => {

    const storedToken = localStorage.getItem("token")

    if (storedToken) {
      console.log(storedToken)
      API.getUserFromToken(storedToken).then(data => {

        if (data.user) {
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
  }, [])


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
            Play an escape room game to practice your javascript skills!  There are questions from beginner to advanced to help you improve.  Beat the time, escape the room, and practice, practice, practice!
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >

            {/* drop down menu */}
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={difficulty}
                  label="Difficulty"
                  onChange={handleLevelChange}
                >
                  <MenuItem value="Easy">Easy</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Hard">Hard</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* delete user account button */}
            <Button variant="outlined" color="secondary" onClick={handleOpen}>Delete User Account</Button>

          </Stack>
        </Container>
      </Box>
      {open && <EditUser open={open} setOpen={setOpen} userId={props.userId} />}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>

          <Grid item xs={12} sm={6} md={4}>
            <Card onClick={() => navigate('/room-of-error')}
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
                image={require("../../assets/Pics/david-pupaza-heNwUmEtZzo-unsplash.jpg")}
                alt="random"
                
              />
            </Card>

          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card onClick={() => navigate('/new-puzzle')}
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Castle of Chaos
                </Typography>
                <Typography>
                  Are you ready to enter the castle?
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: '56.25%',
                }}
                image={require("../../assets/Pics/castle.jpg")}
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
                  coming soon
                </Typography>
              </CardContent>
            </Card>

          </Grid>

        </Grid>
      </Container>
    </main>

  )
}

export default Profile
