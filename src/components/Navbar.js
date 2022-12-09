import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {TabPanel} from '@mui/material/';

// TODO: fix navigation for server useage EXAMPLE BELOW

export default function Navbar(props) {
  const navigate = useNavigate()
  const logoutFunc = () => {
    props.handleLogout()
    navigate("/login")
  }
  const [value, setValue] = React.useState('one');

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    // switch (newValue) {
    //   case "home":
    //     to ="/home"
    //     break;
    //     case "profile":
    //       to ="/profile"
    //       break;
    //       case "login":
    //         to ="/login"
    //         break;
    //         case "puzzle":
    //           to ="/puzzle"
    //           break;
    // }

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

//       <li className="nav-item">
//         <Link to="/"
//           onClick={() => handlePageChange('Home')}
//           className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
//           Home
//         </Link>
//       </li>

//       <li className="nav-item">
//         <Link to="/Profile"
//           onClick={() => handlePageChange('Profile')}
//           className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}>
//           Profile
//         </Link>
//       </li>

//       <li className="nav-item">
//         <Link to="/Login"
//           onClick={() => handlePageChange('Login')}
//           className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}>
//           Login
//         </Link>
//       </li>

//       <li className="nav-item">
//         <Link to="/Logout"
//           onClick={() => handlePageChange('Logout')}
//           className={currentPage === 'Logout' ? 'nav-link active' : 'nav-link'}>
//           Logout
//         </Link>
//       </li>
//     </ul>
//   );
// }

// export default Navbar;