import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/EditOutlined';
import axios from 'axios';

class EditThoughtDialog extends Component {
    state = {
        open: false,
        newTitle:this.props.title,
        newBody:this.props.body,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = (id) => {
        this.setState({ open: false });
        
    };
    handleSave = () => {
        let newThought={
            id:this.props.id,
            title:this.state.newTitle,
            body:this.state.newBody
        }
        axios.put(`/api/thoughts/${this.props.id}`, newThought)
        //Need to refresh page here
        console.log(newThought)
        this.setState({ open: false });
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}><EditIcon /></Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Edit Shower Thought</DialogTitle>
                    <DialogContent>

                        <TextField
                            onChange={(e) => this.setState({
                                newTitle: e.target.value
                            })}
                            
                            margin="dense"
                            id="newThoughtTitle"
                            label="Thought Title"
                            type="string"
                            defaultValue={this.props.title}
                            fullWidth
                        />
                        <TextField
                            onChange={(e) => this.setState({
                                newBody: e.target.value
                            })}
                            margin="dense"
                            id="newThoughtContent"
                            label="Thought Content"
                            type="string"
                            defaultValue={this.props.body}
                            fullWidth
                            multiline
                            rows={5}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
            </Button>
                        <Button onClick={this.handleSave} color="primary">
                            Save
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    };
};
export default (EditThoughtDialog)