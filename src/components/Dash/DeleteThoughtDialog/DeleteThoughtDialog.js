import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import {getThoughts} from '../../../ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';

class DeleteThoughtDialog extends Component {
    state = {
        open: false,
    };
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    handleClose = (id) => {
        this.setState({ open: false });

    };
    handleDelete = () => {

        axios.delete(`/api/thoughts/${this.props.id}`)
        this.props.getThoughts()
        this.setState({ open: false });
    }
    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}><DeleteIcon /></Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Delete Shower Thought</DialogTitle>
                    <DialogContent>
                        <p>Are you sure you want to delete this Shower Thought?</p>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
            </Button>
                        <Button onClick={this.handleDelete} color="primary">
                            Delete
            </Button>
                    </DialogActions>
                </Dialog>

            </div>
        )
    }
};
function mapStateToProps(state){
    const showerThoughts = state
    return {
        showerThoughts
    }
}
export default connect(mapStateToProps, {getThoughts})(DeleteThoughtDialog)