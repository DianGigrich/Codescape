import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField, Grid, FormControlLabel, Button } from '@mui/material/'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function EditUser({ open, setOpen, props }) {
    const handleClose = () => setOpen(false);
    const [loginName, setLoginName] = useState("")
    const [loginPassword, setLoginPassword] = useState("")


    const loginHandle = e => {
        e.preventDefault();
        props.handleLoginSubmit({
            username: loginName,
            password: loginPassword
        })
    }

    function deleteAcct() {
        // TODO: does something like deleteing all info

    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box 
                    sx={{
                        
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor:'#FFFFFF',
 
                    }}
                    
                >

                    <Typography component="h1" variant="h5">
                        Edit User
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
                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 3, mb: 2, width: 1 / 1 }}>Update</Button>
                        <Button type="submit" variant="contained" color="secondary" sx={{ mt: 3, mb: 2, width: 1 / 1 }} onClick={deleteAcct()}>Delete</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}