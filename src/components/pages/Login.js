import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
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

function Login(props) {
    const navigate = useNavigate();
  
    useEffect(() => {
        if (props.isLoggedIn) {
            navigate("/Profile")
        }

    }, [props.isLoggedIn])
    const [loginName, setLoginName] = useState("")
    const [loginPassword, setLoginPassword] = useState("")


    const loginHandle = e => {
        e.preventDefault();
        props.handleLoginSubmit({
            username: loginName,
            password: loginPassword
        })
    }

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
                    Sign in
                </Typography>
                <Box component="form" onSubmit={loginHandle} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Username"
                        id="name"
                        name="username"
                        autoComplete="name"
                        value={loginName}
                        onChange={e => setLoginName(e.target.value)}
                    />  
                    <TextField margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="current-password"
                        value={loginPassword}
                        onChange={e => setLoginPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button type="submit" variant="contained" color="secondary" sx={{ mt: 3, mb: 2, width: 1 / 1 }}>Sign in</Button>
                    <Grid container>
                        <Grid item>
                            <Link to="./Signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}

export default Login