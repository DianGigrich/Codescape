import React, { useState, useEffect } from 'react';
import API from '../utils/API'
import Questionitem from './Questionitem';
import QuestionAnswer from './QuestionAnswer';
import { Box, Typography, Modal, Button, Stack } from '@mui/material/';
// import * as interact from 'interactjs';

import '../index.css';




export default function Question(props) {
  const { open, setOpen } = props;
  const handleClose = () => setOpen(false);

  const [question, setQuestions] = useState({})


  useEffect(() => {
    API.getQuestions(props).then(data => {
      console.log(data)
      setQuestions(data)
      console.log(question, "1")
    })
  }, [props])
  console.log(question, "2")


  //  solution logic
  let solutionStr = `${question.solution}`;
  console.log(solutionStr);
  const solutionArr = solutionStr.split('^');
  console.log(solutionArr);

  const solutionArrCopy = [...solutionArr]
  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const item = arr[i];
      arr[i] = arr[j];
      arr[j] = item;
    }
  }
  shuffleArray(solutionArrCopy);
  console.log(solutionArrCopy, solutionArr);

  const answerArr = []

  function handleCheck() {

  }

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
          <Typography component="h3" variant="h5">
            {question.text}
          </Typography>
          <Stack
            sx={{ pt: 4, width: "100%", color: "#b9e2de" }}
            direction="row"
            spacing={2}
            justifyContent="center"

          >
            {solutionArr.map((item, index) => {
              return (<Questionitem
                key={index}
                text={question.text}
                item={item}
              />)
            })}
          </Stack>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            {solutionArrCopy.map((item, index) => {
              console.log(index, "index")
              return (<QuestionAnswer
                key={index}
                id={question.id}
                solution={item}
              />)
            })}
          </Stack>
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 3, mb: 2 }} onClick={handleCheck}>Check Solution</Button>
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 3, mb: 2 }} onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div >
  )
}
