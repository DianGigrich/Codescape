import React, {useState} from 'react';
import Questionitem from './Questionitem'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Stack } from '@mui/material/'
import '../index.css';
// import * as interact from 'interactjs';

export default function Question({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  useEffect(()=>{
    API.getQuestions(props).then(data=>{
        console.log(data)
        setQuestions(data)
    })
},[props])

  const {questions, setQuestions} = useState()

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
          {questions.map((item)=><Questionitem 
            key={item.id} 
            id={item.id} 
            question={item.question} 
            answer={item.answer}
            difficulty={item.difficulty}
                      />)}
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 3, mb: 2 }} onClick={handleClose}>Button</Button>
        </Box>
      </Modal>
    </div >
  )
}
