import React, {useState, useEffect} from 'react';
import API from '../utils/API'
import Questionitem from './Questionitem'
import { Box, Typography, Modal, Button} from '@mui/material/';

import '../index.css';


export default function Question(props) {
  const { open, setOpen } = props;
  const handleClose = () => setOpen(false);

  const [questions, setQuestions] = useState([])


  useEffect(()=>{
    API.getQuestions(props).then(data=>{
        console.log(data)
        setQuestions(data)
        console.log(questions, "1")
    })
},[props])
 console.log(questions, "2")

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
          <Questionitem/>
          {questions.map((item)=> { return(<Questionitem 
            key={item.id} 
            id={item.id} 
            text={item.text} 
            solution={item.solution}
            level={item.level}
                      />)})}
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 3, mb: 2 }} onClick={handleClose}>Button</Button>
        </Box>
      </Modal>
    </div >
  )
}
