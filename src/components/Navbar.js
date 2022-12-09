import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import TabPanel from '@mui/material/'


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
        sx={{ bgcolor: "#4db6ac" }}
        value={value}
        variant="fullWidth"
        onChange={handleTabChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab textColor="primary" value="Home" label="Home" onClick={()=> navigate('/')} />

        <Tab textColor="primary" value="Leaderboard" label="Leaderboard" onClick={()=> navigate('/Leaderboard')} />

        {/* {props.isLoggedIn ?  */}
        <Tab value="Profile" textColor="primary" label="Profile" onClick={()=> navigate('/Profile')}/>
         {/* :null} */}
        {/* {props.isLoggedIn ?  */}
        <Tab textColor="primary" onClick={logoutFunc} label="Logout" />
        {/* //  :  */}
        <Tab value="Login" textColor="primary" label="Login" onClick={()=> navigate('/login')} />
        {/* // } */}
      </Tabs>
    </Box>
  )
}

// function Navbar({ currentPage, handlePageChange }) {

//   return (
//     <ul className="nav nav-tabs">

//       <li className="nav-item">
//         <Link to="/Leaderboard"
//           onClick={() => handlePageChange('Leaderboard')}
//           className={currentPage === 'Leaderboard' ? 'nav-link active' : 'nav-link'}>
//           Leaderboard
//         </Link>
//       </li>
