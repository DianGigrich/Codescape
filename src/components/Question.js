import React, { useState, useEffect } from 'react';
import API from '../utils/API'
import Questionitem from './Questionitem';
import QuestionAnswer from './QuestionAnswer';
import { Box, Typography, Modal, Button, Stack } from '@mui/material/';
import '../index.css';

export default function Question(props) {
  const { open, setOpen, setTapeRoll, setBox, setFile, setKey, setShreddedFile, setShredder, setTapeDispenser, setFileCabinet  } = props;
  
  const handleClose = () => {
    setOpen(false);
    if (localStorage.getItem("correct")) {
      const clicked = localStorage.getItem("click")
      console.log(clicked)
      switch (clicked) {
          case "box":
              setTapeRoll(true);
              setBox(true);
              localStorage.setItem("click", "");
              localStorage.setItem("correct", false);
              console.log("I clicked the box")
              break;
          case "shredder":
              setShreddedFile(true);
              setShredder(true);
              localStorage.setItem("click", "");
              localStorage.setItem("correct", false);
              console.log("I clicked the shredder")
              break;
          case "emptyTapeDispenser":
              setTapeRoll(false);
              setTapeDispenser(true)
              localStorage.setItem("click", "");
              localStorage.setItem("correct", false);
              console.log("I clicked the empty tape dispenser")
              break;
          case "tapeDispenser":
              setShreddedFile(false)
              setFile(true);
              localStorage.setItem("click", "");
              localStorage.setItem("correct", false);
              console.log("I clicked the tape dispenser")
              break;
          case "fileCabinet":
              setFile(false);
              setKey(true);
              setFileCabinet(true);
              localStorage.setItem("click", "");
              localStorage.setItem("correct", false);
              console.log("I clicked the file cabinet")
              break;
      }
  } else {
      console.log(localStorage.getItem("correct"))
      console.log("failure")
      // localStorage.setItem("correct", false);
  }
    
  }

  const [question, setQuestions] = useState({})

  useEffect(() => {
    API.getQuestions(props).then(data => {
      console.log(data)
      setQuestions(data)

    })
  }, [props])
 
  //  solution logic
  let solutionStr = `${question.solution}`;

  const solutionArr = solutionStr.split('^');


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

  return (
    <div>
      <Modal id="Modalrestriction"
        open={open}
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
            spacing={1}
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
                 return (<QuestionAnswer
                key={index}
                id={question.id}
                solution={item}
              />)
            })}
          </Stack>
          {/* <Button onClick={}>Submit</Button> */}
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 3, mb: 2 }} onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div >
  )
}
