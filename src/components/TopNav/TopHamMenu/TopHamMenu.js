import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import '../TopNav.css';
import './TopHamMenu.css';


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
                    <Button color="inherit" onClick={this.handleClose} href="/#/" className="hamItem">Home</Button>
                    <Button color="inherit" onClick={this.handleClose} href="/#/dash" className="hamItem">Dashboard</Button>
                    <Button color="inherit" onClick={this.handleClose} href="/#/about" className="hamItem">About</Button>
               
                </Menu>
            </div>
        );
    }
}

export default TopHamMenu;