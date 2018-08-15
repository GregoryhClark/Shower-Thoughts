import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {getThoughts} from '../../ducks/reducer';
import { connect } from 'react-redux';
import './Home.css';



class Home extends Component {
    componentDidMount(){
        this.props.getThoughts()
    }
    render() {
        return (
            <div className="Home_master">
            <div className="home_header">
            <h1>Welcome to Shower Thoughts!</h1>
            </div>
                
            <Button variant="contained" color="primary" href="/#/dash">Enter</Button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const {showerThoughts} = state
    return {
        showerThoughts
    }
}
export default connect(mapStateToProps, {getThoughts})(Home)