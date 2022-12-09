import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


export default function Navbar(props) {
  const navigate = useNavigate()
  const logoutFunc = () => {
    props.handleLogout()
    navigate("/login")
  }
  const [value, setValue] = React.useState('one');

  const handleTabChange = (event, newValue) => {
    setValue(newValue);

  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        centered
        sx={{ bgcolor: "#4db6ac" }}
        value={value}
        onChange={handleTabChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Link to="/"><Tab textColor="primary" label="Home"/></Link>
        {props.isLoggedIn ? <Link to="/Profile"><Tab textColor="primary" label="Profile"/>
        </Link>:null}
        {props.isLoggedIn ? <Tab textColor="primary" onClick={logoutFunc} label="Logout" /> : <Link to="/login"><Tab textColor="primary" label="Login"/></Link>}
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
