import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import TopHamMenu from './TopHamMenu/TopHamMenu';
import './TopNav.css'
const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function TopNav(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <TopHamMenu />
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Shower Thoughts
          </Typography>
                    <div className="TopnavButtons">

                        <Button color="inherit" href="/#/">Home</Button>
                        <Button color="inherit" href="/#/dash">Dashboard</Button>
                        <Button color="inherit" href="/#/about">About</Button>

                    </div>

                </Toolbar>
            </AppBar>
        </div>

    )

}
export default withStyles(styles)(TopNav);