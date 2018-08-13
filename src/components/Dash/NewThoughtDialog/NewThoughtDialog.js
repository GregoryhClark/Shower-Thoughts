import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

class NewThoughtDialog extends Component {
    state = {
        open: false,
        newTitle:'',
        newBody:'',
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
        let newThought={
            title:this.state.newTitle,
            body:this.state.newBody
        }
        axios.post('/api/thoughts', newThought)
    };

    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}>New Shower Thought</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">New Shower Thought</DialogTitle>
                    <DialogContent>

                        <TextField
                            onChange={(e) => this.setState({
                                newTitle: e.target.value
                            })}
                            autoFocus
                            margin="dense"
                            id="newThoughtTitle"
                            label="Thought Title"
                            type="string"
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
                            fullWidth
                            multiline
                            rows={5}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
            </Button>
                        <Button onClick={(e)=>{this.handleClose(e.target.value)}} color="primary">
                            Save
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    };
};
export default (NewThoughtDialog)