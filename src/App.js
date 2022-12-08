
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import API from "./utils/API";
import Home from "./components/pages/Home"
import Profile from "./components/pages/Profile";
import Navbar from "./components/Navbar";
import Login from "./components/pages/Login";
import StickyFooter from "./components/Footer";
import Header from "./components/Header";
import Puzzle from './components/pages/Puzzle';
import Signup from "./components/pages/Signup"
import {
  ThemeProvider,
  CssBaseline,
  createTheme
} from "@mui/material"

const theme = createTheme({
  palette: {
      mode: 'light',
      primary: {
          main: '#4db6ac',
      },
      secondary: {
          main: '#fb8c00',
      },
  },
  typography: {
      fontFamily: 'Droid Sans',
  },
});
import PuzzleImage from "./components/PuzzleImage";

function App() {
  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [showHeader, setShowHeader] = useState(true)
  const [showFooter, setShowFooter] = useState(true)
  const [showNav, setShowNav] = useState(true)

  useEffect(() => {
    const storedToken = localStorage.getItem("token")
    if (storedToken) {
      console.log(storedToken)
      API.getUserFromToken(storedToken).then(data => {
        if (data.user) {
          console.log(data)
          setToken(storedToken)
          setIsLoggedIn(true)
          setUserId(data.user.id)
          setUserName(data.user.username)
        }
      })
    } else {
      console.log('no stored token')
    }
  }, [])

  const handleLoginSubmit = userObj => {
    API.login(userObj).then(data => {
      console.log(data);
      if (data.token) {
        setUserId(data.user.id)
        setToken(data.token)
        setIsLoggedIn(true)
        setUserName(data.user.username)
        localStorage.setItem("token", data.token)
      }
    })
  }
  const handleSignupSubmit = userObj => {
    API.signup(userObj).then(data => {
      console.log(data);
      if (data.token) {
        setUserId(data.user.id)
        setToken(data.token)
        setIsLoggedIn(true)
        setUserName(data.user.username)
        localStorage.setItem("token", data.token)
      }
    })
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserId(0);
    setToken("");
    setUserName("")
  }
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          {showHeader && 
          <Header />
          }
        {showNav && 
          <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
          }
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login
              isLoggedIn={isLoggedIn}
              handleLoginSubmit={handleLoginSubmit}
            />} />
            <Route path="/login/Signup" element={<Signup handleSignupSubmit={handleSignupSubmit} />} />
            <Route path="/profile" element={<Profile
              isLoggedIn={isLoggedIn}
              userId={userId}
              token={token}
              userName={userName}
              setIsLoggedIn={setIsLoggedIn}
              setToken={setToken}
              setUserId={setUserId}
              setUserName={setUserName}
            />} />
            <Route path="/puzzle" element={<Puzzle/>}/>
          <Route path="/puzzle-frame" element={<PuzzleImage funcHeader={setShowHeader} funcFooter={setShowFooter} funcNav={setShowNav}/>} />
          <Route path="*" element={<h1>404</h1>} />
          </Routes>
          {showFooter && 
          <StickyFooter/>
          }

      </Router>
      </ThemeProvider>
  
    </div>
  );
}

export default App;
