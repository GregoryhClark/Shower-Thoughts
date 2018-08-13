import React, { Component } from 'react';
import NewThoughtDialog from '../Dash/NewThoughtDialog/NewThoughtDialog';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import Button from '@material-ui/core/Button';
import './Dash.css';

class Dash extends Component {
    constructor(){
        super();
        this.state={
            thoughtsArray:[{
                id: 1,
                title: 'Bad Thought',
                body: "I hope this doesn't appear on the screen."
            }]
        }
    }
    componentWillMount(){
        axios.get('/api/thoughts').then(thoughts=>{
            console.log(thoughts.data)
            this.setState({
                thoughtsArray:thoughts.data
            })
        })
    }
    render() {
        let thoughtsList = this.state.thoughtsArray.length ? this.state.thoughtsArray.map( (thought, index)=>{
            return (
                <div key = {index}>
                <h1>{thought.title}</h1>
                <p>{thought.body}</p>
                <Button><DeleteIcon /></Button>
                <Button><EditIcon /></Button>
                </div>
        )
        }) : null;
        return (
            <div className="Dash_master">
            
                <h1>Dash Shower Thoughts!</h1>
                <NewThoughtDialog />
                {thoughtsList}
                
                
                
            </div>
        )
    }
}
export default (Dash)