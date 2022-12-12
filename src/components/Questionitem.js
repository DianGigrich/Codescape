
import React from 'react';
import { Container } from '@mui/material'

export default function Questionitem(props) {

  return (
    <Container>
        <div>
          <div className="dropzone">
            <p className='dropzone-words'>{props.item}</p>
          </div>
        </div>
    </Container>
  )
}