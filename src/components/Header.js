import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';

function Header(props) {
    const { sections, title } = props;

    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Typography
                    component="h2"
                    variant="h2"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    Codescape
                </Typography>

                {/* TODO: THIS BUTTON DOES NOTHING RIGHT NOW */}
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Link to="/login/Signup">
                    <Button variant="outlined" size="small">
                        Sign up
                    </Button>
                </Link>
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
