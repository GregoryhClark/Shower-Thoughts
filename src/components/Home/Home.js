import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './Home.css';



class Home extends Component {
    render() {
        return (
            <div className="Home_master">
            <div className="home_header">
            <h1>Welcome to Shower Thoughts!</h1>
            </div>
                
            <a href="/#/dash" className="unstyledA"><Button color="inherit">Enter</Button></a>
            </div>
        )
    }
}
export default (Home)