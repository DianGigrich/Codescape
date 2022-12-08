import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {Button} from '@mui/material/';

// TODO: fix navigation for server useage EXAMPLE BELOW

export default function Navbar(props) {
    const navigate = useNavigate()
    const logoutFunc = ()=>{
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
        value={value}
        onChange={handleTabChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Button variant="contained" color="primary">Hello</Button>
          <Link to ="/">
            <Tab label="Home"/>
            </Link>
          {props.isLoggedIn?<Link to ="/Profile">
            <Tab label="Profile"/>
          </Link>:null}
          {props.isLoggedIn?<Tab color="secondary" onClick={logoutFunc} label="Logout"></Tab>:<Link to="/login"><Tab label="Login"/></Link>}
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