import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Stack } from '@mui/material/'
import '../index.css';
// import * as interact from 'interactjs';

export default function Question({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal id="Modalrestriction"
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
            top: '50%',
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
            Question
          </Typography>
          <Typography component="h1" variant="h5">
            How many licks does it take to get to the center of a tootsie pop?
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <div id="inner-dropzone" className="dropzone">Pizza </div>
            <div id="second-dropzone" className="dropzone">Pasta </div>

          </Stack>

          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <div id="pizza-drop" className="drag-drop"> Pizza </div>
            <div id="pasta-drop" className="drag-drop"> Pasta </div>
          </Stack>
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 3, mb: 2 }} onClick={handleClose}>Button</Button>
        </Box>
      </Modal>
    </div >
  );
}
