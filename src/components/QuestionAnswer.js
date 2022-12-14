import React from 'react';
import { Container } from '@mui/material'

export default function Questionitem(props) {

  return (
    <Container className="solution-boxes">
        <div className="drag-drop" > {props.solution}</div>
    </Container>
  )
}