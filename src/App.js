
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import API from "./utils/API";
import Home from "./components/pages/Home"
import Profile from "./components/pages/Profile";
import AboutUs from "./components/pages/AboutUs";
import Navbar from "./components/Navbar";
import Login from "./components/pages/Login";
import StickyFooter from "./components/Footer";
import Header from "./components/Header";
import RoomOfError from './components/pages/RoomOfError';
import RoomOfErrorFrame from "./components/RoomOfErrorFrame";
import NewPuzzle from './components/pages/NewPuzzle';
import NewPuzzleFrame from './components/NewPuzzleFrame';
import Signup from "./components/pages/Signup";
import Leaderboard from "./components/pages/Leaderboard";
import {
  ThemeProvider,
  CssBaseline,
  createTheme
} from "@mui/material"
import * as interact from 'interactjs';

const theme = createTheme({
  palette: {
      mode: 'light',
      primary: {
          main: '#4db6ac',
          light: '#83ccc5',
      },
      secondary: {
          main: '#fb8c00',
      },
  },
  typography: {
      fontFamily: 'Droid Sans',
  }
});



function dragMoveListener(event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener

interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: ['#pizza-drop', '#pasta-drop'],

  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active')
  },

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target')
    draggableElement.classList.add('can-drop')
   },

  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target')
    event.relatedTarget.classList.remove('can-drop')
  },

  ondrop: function (event) {
    if (event.target.innerText === 'Pizza' && event.relatedTarget.innerText === "Pizza") {
      event.relatedTarget.classList.remove('drag-drop')

      event.relatedTarget.classList.add('drag-stop')

    } else {
      event.relatedTarget.classList.remove('drop-active')
      event.relatedTarget.classList.remove('drop-target')
      event.relatedTarget.classList.add('drop-wrong')
    }
  },

  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')
    event.target.classList.add('drop-wrong')
  }
})

interact('.putmedown').dropzone({

})

interact('.drag-drop')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'self',
        endOnly: true
      })
    ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { move: dragMoveListener }
  })

  interact('.welcome')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { move: dragMoveListener }
  })
 

  interact('.putmedown')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { move: dragMoveListener },
    
    
    onmove : function (event) {
      event.target.classList.add('putmedown1')
      event.target.textContent = "~PUT ME DOWN~"
    },
    onend  : function (event) {
      event.target.textContent = "Thank you!"
      event.target.classList.remove('putmedown1')
    },
  })

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
    console.log('handle login')
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

  const handleSignupSubmit = (userObj, navigate) => {
    console.log(1)
    API.signup(userObj).then(data => {
      console.log(2)
      console.log(data);
      if (data.token) {
        setUserId(data.user.id)
        setToken(data.token)
        setIsLoggedIn(true)
        setUserName(data.user.username)
        localStorage.setItem("token", data.token)
        navigate('/Profile')
      }
    })
    console.log(3)
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
            <Route path="/leaderboard" element={<Leaderboard/>}/> 
            <Route path="/room-of-error" element={<RoomOfError/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/room-of-error-frame" element={<RoomOfErrorFrame funcHeader={setShowHeader} funcFooter={setShowFooter} funcNav={setShowNav}/>} />
            <Route path='/new-puzzle' element={<NewPuzzle/>}/>
            <Route path='/new-puzzle-frame' element={<NewPuzzleFrame funcHeader={setShowHeader} funcFooter={setShowFooter} funcNav={setShowNav}/>}/>
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
