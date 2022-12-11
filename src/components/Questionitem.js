
import React from 'react';

export default function Questionitem(props) {
  return (
    <Container>
      <Typography component="h1" variant="h5">
        {props.text}
      </Typography>
      <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        <div className="dropzone">{props.solution}</div>
      </Stack>
      <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        <div className="drag-drop"> {props.solution}</div>

      </Stack>
    </Container>
  )
}