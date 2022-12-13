import React from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material/'
import API from '../utils/API';




export default function EditUser({ open, setOpen, userId, props }) {
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    // const [editName, setEditName] = useState("")
    // const [editPassword, setEditPassword] = useState("")


    // const editHandle = () => {
    //     props.handleLoginSubmit({
    //         username: editName,
    //         password: editPassword
    //     })
    // }

    function deleteAcct() {
        API.deleteUser(userId).then(data => {
            console.log(data)
            alert("acount deleted")
            navigate("/login/signup")
        })

    }

    console.log(userId, "userid")

    return (
        <div >
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
                        position: 'absolute',
                        top: '30%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >

                    <Typography component="h1" variant="h5">
                        DELETE ACCOUNT?
                    </Typography>
                    <Typography component="h6" variant="h6">
                        This action cannot be undone once the button is pressed.
                    </Typography>
                    <Typography component="h6" variant="h6">
                        Click outside the box to exit with no account deletion.
                    </Typography>
                    {/* <Box component="form" onSubmit={editHandle} sx={{ mt: 1 }}> */}
                        {/* <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Username"
                            id="name"
                            name="username"
                            autoComplete="name"
                            value={editName}
                            onChange={e => setEditName(e.target.value)}
                        /> */}

                        {/* <TextField margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="current-password"
                            value={editPassword}
                            onChange={e => setEditPassword(e.target.value)}
                        /> */}


                        {/* <Button type="submit" variant="contained" color="primary" sx={{ mt: 3, mb: 2, width: 1 / 1 }}>Update</Button> */}
                        <Button type="click" variant="contained" color="secondary" sx={{ mt: 3, mb: 2, width: "20%" }} onClick={deleteAcct}>Delete Account</Button>
                    </Box>
                {/* </Box> */}
            </Modal>
        </div>
    );
}