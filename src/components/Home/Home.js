import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './Home.css';



class Home extends Component {
    render() {
        return (
            <div className="Home_master">
            <div className="home_header">
            <h1>Shower Thoughts!</h1>
            </div>
                
            <Button><a href="/#/dash" className="enter">Enter</a></Button>
            </div>
        )
    }
}
export default (Home)