import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material/'

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

export default function Question({ open, setOpen}) {
    const handleClose = () => setOpen(false);

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
                        bgcolor: '#FFFFFF',

                    }}
                >
                    <Typography component="h1" variant="h5">
                        Question
                    </Typography>
                    <Typography component="h1" variant="h5">
                        How many licks does it take to get to the center of a tootsie pop?
                    </Typography>

                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 3, mb: 2}}>Button</Button>
                </Box>
            </Modal>
        </div >
    );
}