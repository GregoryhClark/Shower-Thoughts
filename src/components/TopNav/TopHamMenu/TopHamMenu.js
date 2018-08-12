import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import '../TopNav.css';

class TopHamMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <div className="TopHamMenuMaster">
                <Button

                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <MenuIcon />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <Button color="inherit"><a className="unstyledA" href="/#/">Home</a></Button>
                    <Button color="inherit"><a className="unstyledA" href="/#/dash">Dashbard</a></Button>
                    <Button color="inherit"><a className="unstyledA" href="/#/settings">Settings</a></Button>
                </Menu>
            </div>
        );
    }
}

export default TopHamMenu;