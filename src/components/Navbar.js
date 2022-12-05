import React from 'react';
// import {Link,useNavigate} from 'react-router-dom';

// TODO: fix navigation for server useage EXAMPLE BELOW

// export default function Navbar(props) {
//     const navigate = useNavigate()
//     const logoutFunc = ()=>{
//       props.handleLogout()
//       navigate("/login")
//     }
//     return (
//       <div>
//           <Link to ="/">Home</Link>
//           {props.isLoggedIn?<Link to ="/Profile">Profile</Link>:null}
//           {props.isLoggedIn?<button onClick={logoutFunc}>Logout</button>:<Link to="/login">login</Link>}
//       </div>
//     )
//   }


function Nav({ currentPage, handlePageChange }) {

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#Leaderboard"
          onClick={() => handlePageChange('Leaderboard')}
          className={currentPage === 'Leaderboard' ? 'nav-link active' : 'nav-link'}
        >
          Leaderboard
        </a>
      </li>
      <li className="nav-item">
 
        <a
          href="#Home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Profile"
          onClick={() => handlePageChange('Profile')}
          className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
        >
          Profile
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Login"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Logout"
          onClick={() => handlePageChange('Logout')}
          className={currentPage === 'Logout' ? 'nav-link active' : 'nav-link'}
        >
          Logout
        </a>
      </li>
    </ul>
  );
}

export default Nav;