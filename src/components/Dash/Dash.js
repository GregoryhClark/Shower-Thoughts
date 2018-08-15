import React, { Component } from 'react';
import NewThoughtDialog from '../Dash/NewThoughtDialog/NewThoughtDialog';
import EditThoughtDialog from '../Dash/EditThoughtDialog/EditThoughtDialog';
import DeleteThoughtDialog from '../Dash/DeleteThoughtDialog/DeleteThoughtDialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {getThoughts} from '../../ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import './Dash.css';

class Dash extends Component {
    constructor() {
        super();
        this.state = {
            thoughtsArray: []
        }
    }
    componentWillMount() {
        this.props.getThoughts()
    }
    deleteThought(id) {
        console.log('deleted thought' , id)
        axios.delete(`/api/thoughts/${id}`).then(() => {
            console.log('deleted thought')
            this.getThoughts()

        }
        )
    }
    editThought(id) {
        axios.put(`/api/thoughts/${id}`)
    }
    render() {
        let thoughtsList = this.props.showerThoughts.length > 0 ? this.props.showerThoughts.map((thought, index) => {
            return (
                <div className="thoughtsList" key={index}>
                <Card>
                <CardContent>
                    <h1>{thought.title}</h1>
                    <p>{thought.body}</p>
                    <div className="thoughOptions">
                        <DeleteThoughtDialog id={thought.id} title={thought.title} body={thought.body} />
                        <EditThoughtDialog id={thought.id} title={thought.title} body={thought.body} />
                    </div>
                    </CardContent>
                </Card>
                </div>
            )
        }) : <CircularProgress/>;
        return (
            <div className="Dash_master">

                <NewThoughtDialog />
                {thoughtsList}



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
export default connect(mapStateToProps, {getThoughts})(Dash)