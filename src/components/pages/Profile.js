import React,{useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import API from "../../utils/API"

export default function Profile(props) {
    const navigate = useNavigate();
    useEffect(()=>{
        const storedToken = localStorage.getItem("token")
        if(storedToken){
          console.log(storedToken)
          API.getUserFromToken(storedToken).then(data=>{
            if(data.user){
              console.log(data)
              props.setToken(storedToken)
              props.setIsLoggedIn(true)
              props.setUserId(data.user.id)
              props.setUserName(data.user.username)
            } else {
                navigate("/login")
            }
          })
        } else {
          console.log('no stored token')
          navigate("/login")
        }
      },[])
  return (
    <>
    {
        props.isLoggedIn?(
        <div className="Profile">
        <h1>Welcome {props.userName}!</h1>
        
        </div>
        ):(
            <h1>Please wait, something may have gone wrong.</h1>
        )
    }
    </>
  )
}
