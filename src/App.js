
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import API from "./utils/API";
import Home from "./components/pages/Home"
import Profile from "./components/pages/Profile";
import Navbar from "./components/Navbar";
import Login from "./components/pages/Login";
import StickyFooter from "./components/Footer";
import Header from "./components/Header";


function App() {
  const [userId, setUserId] = useState(0)
  const [userName, setUserName] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState("")

  useEffect(()=>{
    const storedToken = localStorage.getItem("token")
    if(storedToken){
      console.log(storedToken)
      API.getUserFromToken(storedToken).then(data=>{
        if(data.user){
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
  },[])

  const handleLoginSubmit = userObj=>{
    API.login(userObj).then(data=>{
      console.log(data);
      if(data.token){
        setUserId(data.user.id)
        setToken(data.token)
        setIsLoggedIn(true)
        setUserName(data.user.username)
        localStorage.setItem("token",data.token)
      }
    })
  }
  const handleSignupSubmit = userObj=>{
    API.signup(userObj).then(data=>{
      console.log(data);
      if(data.token){
        setUserId(data.user.id)
        setToken(data.token)
        setIsLoggedIn(true)
        setUserName(data.user.username)
        localStorage.setItem("token",data.token)
      }
    })
  }
  const handleLogout = ()=>{
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserId(0);
    setToken("");
    setUserName("")
  }
  return (
    <div className="App">
      <Router>
      <Header/>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login
            isLoggedIn={isLoggedIn}
            handleLoginSubmit={handleLoginSubmit}
            handleSignupSubmit={handleSignupSubmit}
          />}/>
          <Route path="/profile" element={<Profile 
          isLoggedIn={isLoggedIn} 
          userId={userId} 
          token={token} 
          userName={userName}
          setIsLoggedIn={setIsLoggedIn}
          setToken={setToken}
          setUserId={setUserId}
          setUserName={setUserName}
          />}/>
          <Route path="/Puzzle/" element={<Puzzle/>}/>
          <Route path="*" element={<h1>404</h1>}/>
        </Routes>
        <StickyFooter/>
      </Router>     
    </div>
  );
}

export default App;
