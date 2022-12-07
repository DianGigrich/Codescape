import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const theme = createTheme();

export default function Signup(props) {
    const navigate = useNavigate();
    useEffect(() => {
        if (props.isLoggedIn) {
            navigate("/Profile")
        }

    }, [props.isLoggedIn])
    const [loginName, setLoginName] = useState("")
    const [loginPassword, setLoginPassword] = useState("")


    const signupHandle = e => {
        e.preventDefault();
        props.handleSignupSubmit({
            username: loginName,
            password: loginPassword
        })
    }
    const [signupName, setSignupName] = useState("")
    const [signupPassword, setSignupPassword] = useState("")

    return (
        // <div>hi</div>
        < ThemeProvider theme={theme} >
            <Container component="main" maxWidth="xs">
                <CssBaseline />
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
                            label="password"
                            type="password" 
                            name="password" 
                            value={signupPassword} 
                            onChange={e => setSignupPassword(e.target.value)} />
                        <Button>Signup!</Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    )
}
