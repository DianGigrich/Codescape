import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
       <Link color="inherit" href="https://github.com/DianGigrich/Codescape/">
       Codescape
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter({puzzleImage}) {
  if (puzzleImage===true) {
    return (<></>)
  } else {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
      
    >
 
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          position:"fixed",
          bottom:0
          
        }}
      >
        <Container maxWidth="sm">
          <Typography className="putmedown" variant="body1" gutterBottom>
            Thank you for playing today!
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
}