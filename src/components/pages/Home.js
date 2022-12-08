import React from 'react';
import klee from '../../assets/Pics/jumpty_dumpty_chrome.ico'
import phd from '../../assets/Pics/phd.jpg'
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';

// TODO: OBVIOUSLY A WORK IN PROGRESS

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Home() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid sx={{ flexGrow: 1 }}>
            <Grid Grid container spacing={2}>
                <Grid card xs={6}>
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="Puzzle">
                                    K
                                </Avatar>
                            }
                            title="Klee is adorable and so are her Jumpty Dumpties"
                            subheader="Decemeber 7, 2022"
                        />
                        <img
                            src={`${klee}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${klee}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={klee}
                            loading="lazy"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                When you want to blow up all the fish in the pond, just grab a jumpty dumpty!
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Find a pond.
                                </Typography>
                                <Typography paragraph>
                                    Throw One or Two Jumpty Dumpties into the pond.
                                </Typography>
                                <Typography paragraph>
                                    Enjoy the explosion!
                                </Typography>
                                <Typography paragraph>
                                    Collect the fish.
                                </Typography>
                                <Typography paragraph>
                                    Cook the fish.
                                </Typography>
                                <Typography paragraph>
                                    Eat the fish.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
                <Grid card xs={6}>
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="Updates">
                                    P
                                </Avatar>
                            }
                            title="Pearl Harbor Day"
                            subheader="December 7th 2022"
                        />
                        <img
                            src={`${phd}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${phd}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={phd}
                            loading="lazy"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Never forget what we did in response to this attack on our precious Hawaiian harbor that killed many sailors.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>
                                    Final Countdown was a great movie. I highly recommend watching it.
                                </Typography>
                                <Typography paragraph>
                                    It suffers from a bit of "of its time", but also devles into the philosophical debate over whether or not you should change the past if you have the opportunity.  It also has a dog named Charlie, who is basically useless, but it's fun to see a dog on an aircraft carrier.
                                </Typography>
                                <Typography paragraph>
                                    Final Countdown stars Martin Sheen, but all of the characters are unique and interesting.  An aircraft carrier is trasnported in time to just before Pearl Harbor Day.  That is why it is relevant to this post. Thank you and have a good day!
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
}
