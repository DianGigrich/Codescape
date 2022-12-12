import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


export default function Navbar(props) {
  const navigate = useNavigate()
  const logoutFunc = () => {
    props.handleLogout()
    navigate("/login")
  }
  const [value, setValue] = React.useState('Home');

  const handleTabChange = (event, newValue) => {
    setValue(newValue);

  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        centered
        value={value}
        variant="fullWidth"
        onChange={handleTabChange}
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab textColor="primary" value="Home" label="Home" onClick={() => navigate('/')} />

        <Tab textColor="primary" value="Leaderboard" label="Leaderboard" onClick={() => navigate('/Leaderboard')} />

        <Tab textColor="primary" value="AboutUs" label="About Us" onClick={() => navigate('/AboutUs')} />

        {props.isLoggedIn ? 
        <Tab value="Profile" textColor="primary" label="Profile" onClick={() => navigate('/Profile')} />
       :null} 
        {props.isLoggedIn ? 
        <Tab textColor="primary" onClick={logoutFunc} label="Logout" />
           : 
        <Tab textColor="primary" label="Login" onClick={() => navigate('/login')} />
         } 
      </Tabs>
    </Box>
  )
}

