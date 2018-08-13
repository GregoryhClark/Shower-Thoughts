import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class NewThoughtDialog extends Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
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
                        {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send
                        updates occasionally.
            </DialogContentText> */}
                        <TextField
                            autoFocus
                            margin="dense"
                            id="newThoughtTitle"
                            label="Thought Title"
                            type="string"
                            fullWidth
                        />
                        <TextField
                            
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
                        <Button onClick={this.handleClose} color="primary">
                            Save
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    };
};
export default (NewThoughtDialog)