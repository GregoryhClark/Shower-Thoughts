import React, { Component } from 'react';
import './TopNav.css'

class TopNav extends Component {
    changeHamburger() {
        var x = document.getElementById("myTopnav");
        if (x.className === "TopNav") {
            x.className += " responsive";
        } else {
            x.className = "TopNav";
        }
    }
    render() {
        return (
            <div className="TopNav_master">
                <div className="TopNav" id="myTopnav">
                <a href="/#/" className="active">Home</a>
                <a href="/#/dash">Dashboard</a>
                <a href="/#/settings">Settings</a>
                <a href="javascript:void(0);" className="icon" onClick={this.changeHamburger}>&#9776;</a>
                </div>
                
            </div>
        )
    }
}
export default (TopNav)