import React from 'react';
import { useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';


function Header(props) {
    const navigate = useNavigate();
    return (

        <React.Fragment >
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: "#4db6ac" }}>
                <Typography

                    component="h2"
                    variant="h2"
                    align="center"
                    // noWrap
                    sx={{ flex: 1, letterSpacing: 6 }}
                >
                    Codescape
                </Typography>

                
                <Button variant="contained" color="secondary" size="small" onClick={() => navigate('/login/Signup')}>
                    Sign up
                </Button>

            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
            
            </Toolbar>
        </React.Fragment>

    );
}

// Header.propTypes = {
//     sections: PropTypes.arrayOf(
//         PropTypes.shape({
//             title: PropTypes.string.isRequired,
//             url: PropTypes.string.isRequired,
//         }),
//     ).isRequired,
//     title: PropTypes.string.isRequired,
// };

export default Header;
