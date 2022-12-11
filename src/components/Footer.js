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
       <Link color="inherit" href="https://codescape.netlify.com/">
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
      <Container  component="main" sx={{ mt: 8, mb: 2}} maxWidth="sm">
        <Typography className="putmedown" variant="h6" component="h4" gutterBottom>
          {'Thank you for playing today.'}
        </Typography>
        <a href="https://github.com/DianGigrich/Codescape" alt="github link" target="_blank" rel="noreferrer"><Typography variant="h6"><CopyrightIcon/>Codescape </Typography></a>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
}