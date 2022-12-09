import React from 'react';
import { useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
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
                    noWrap
                    sx={{ flex: 1, letterSpacing: 6 }}
                >
                    Codescape
                </Typography>

                {/* TODO: THIS BUTTON DOES NOTHING RIGHT NOW */}
                <IconButton sx={{fontSize: 'large'}}>
                    <SettingsIcon onClick={() => navigate('/profile')}/>
                </IconButton>
                <Button variant="contained" color="secondary" size="small" onClick={() => navigate('/login/Signup')}>
                    Sign up
                </Button>

            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
                {/* TODO: um, i dunno, nav links? */}
                {/* {sections.map((section) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        href={section.url}
                        sx={{ p: 1, flexShrink: 0 }}
                    >
                        {section.title}
                    </Link>
                ))} */}
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
