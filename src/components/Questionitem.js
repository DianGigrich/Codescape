
import React from 'react';
import { Container } from '@mui/material'


export default function Questionitem(props) {

  return (
    <Container>
        <div>
          <div className="">
            <p className='dropzone' id={props.id}>{props.item}</p>
          </div>
        </div>
    </Container>
  )
}