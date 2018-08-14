import React, { Component } from 'react';
import NewThoughtDialog from '../Dash/NewThoughtDialog/NewThoughtDialog';
import EditThoughtDialog from '../Dash/EditThoughtDialog/EditThoughtDialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';
// import DeleteIcon from '@material-ui/icons/DeleteOutlined';
// import Button from '@material-ui/core/Button';
import './Dash.css';

class Dash extends Component {
    constructor() {
        super();
        this.state = {
            thoughtsArray: []
        }
    }
    componentWillMount() {
        this.getThoughts()
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
    getThoughts() {
        axios.get('/api/thoughts').then(thoughts => {
            this.setState({
                thoughtsArray: thoughts.data
            })
        })
    }
    render() {
        let thoughtsList = this.state.thoughtsArray.length > 0 ? this.state.thoughtsArray.map((thought, index) => {
            return (
                <div className="thoughtsList" key={index}>
                <Card>
                <CardContent>
                    <h1>{thought.title}</h1>
                    <p>{thought.body}</p>
                    <div className="thoughOptions">
                        <button value={thought.id} onClick={(e) => this.deleteThought(e.target.value)}>Delete</button>
                        {/* <Button value={thought.id} onClick={(e) => this.deleteThought(e.target)}><DeleteIcon/></Button> Clicking the icon doesn't render the thought id. This causes an issue. */}
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
export default (Dash)