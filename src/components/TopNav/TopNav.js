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
                        Adulting
          </Typography>
                    <div className="TopnavButtons">
                        <Button color="inherit"><a className="unstyledA" href="/#/">Home</a></Button>
                        <Button color="inherit"><a className="unstyledA" href="/#/dash">Dashbard</a></Button>
                        <Button color="inherit"><a className="unstyledA" href="/#/settings">Settings</a></Button>

                    </div>

                </Toolbar>
            </AppBar>
        </div>

    )

}
export default withStyles(styles)(TopNav);