import React, {useEffect,useState} from 'react'
import {useNavigate} from "react-router-dom"

function Login(props) {
    const navigate = useNavigate();
    useEffect(()=>{
        if(props.isLoggedIn){
            navigate("/Profile")
        }
       
    },[props.isLoggedIn])
    const [loginName, setLoginName] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [signupName, setSignupName] = useState("")
    const [signupPassword, setSignupPassword] = useState("")

    const loginHandle=e=>{
      e.preventDefault();
      props.handleLoginSubmit({
        username:loginName,
        password:loginPassword
      })
    }
    const signupHandle=e=>{
      e.preventDefault();
      props.handleSignupSubmit({
        username:loginName,
        password:loginPassword
      })
    }
  return (
    <div>
    <form onSubmit={loginHandle}>
      <h3>Login</h3>
      <input name="username"  value={loginName} onChange={e=>setLoginName(e.target.value)}/>
      <input type="password" name="password" value={loginPassword} onChange={e=>setLoginPassword(e.target.value)}/>
      <button>Log in!</button>
    </form>
    <form onSubmit={signupHandle}>
      <h3>Signup</h3>
      <input name="username"  value={signupName} onChange={e=>setSignupName(e.target.value)}/>
      <input type="password" name="password" value={signupPassword} onChange={e=>setSignupPassword(e.target.value)}/>
      <button>Signup!</button>
    </form>
    </div>
  )
}

export default Login