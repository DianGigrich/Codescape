import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Codescape
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function Signup(props) {
    
    const navigate = useNavigate();
    useEffect(()=>{
        if(props.isLoggedIn){
            navigate("/Profile")
        }
    },[props.isLoggedIn])

    const signupHandle = e => {
        e.preventDefault();
        props.handleSignupSubmit({
            username: signupName,
            email: signupEmail,
            password: signupPassword
        }, navigate);

    }
    const [signupName, setSignupName] = useState("")
    const [signupPassword, setSignupPassword] = useState("")
    const [signupEmail, setSignupEmail] = useState("")

    return (

        <Container component="main" maxWidth="xs">

            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Box component="form" onSubmit={signupHandle}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Username"
                        name="username"
                        value={signupName}
                        onChange={e => setSignupName(e.target.value)} />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        value={signupEmail}
                        onChange={e => setSignupEmail(e.target.value)} />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="password"
                        type="password"
                        name="password"
                        value={signupPassword}
                        onChange={e => setSignupPassword(e.target.value)} />
                    <Button type="submit" variant="outlined" fullWidth color="secondary" label="Submit">Submit</Button>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}
