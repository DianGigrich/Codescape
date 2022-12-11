
import React from 'react';

export default function Questionitem(props) {
  return (
    <Container>
      <Typography component="h1" variant="h5">
        {props.question}
      </Typography>
      <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        <div className="dropzone">{props.answer}</div>
      </Stack>
      <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        <div className="drag-drop"> {props.answer}</div>

      </Stack>
    </Container>
  )
}