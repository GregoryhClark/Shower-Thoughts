import React, { Component } from 'react';
import './About.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class About extends Component {
    render() {
        return (
            <div className="About_master">
                <h1>About Shower Thoughts!</h1>
                <p className="about_p">This is a simple React app that allows a user to jot down <a target="none" href="https://www.reddit.com/r/Showerthoughts/">shower thoughts</a>. 
                It was designed to be responsive to varying screen sizes.</p>
                
                <div className="about_list">
                <h4>Technologies Used:</h4>
                <List dense>
                    <ListItem>
                        <ListItemText
                            primary="React"
                            secondary={null}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Redux"
                            secondary={null}
                        />
                    </ListItem><ListItem>
                        <ListItemText
                            primary="Material-UI"
                            secondary={null}
                        />
                    </ListItem><ListItem>
                        <ListItemText
                            primary="JavaScript"
                            secondary={null}
                        />
                    </ListItem><ListItem>
                        <ListItemText
                            primary="CSS"
                            secondary={null}
                        />
                    </ListItem><ListItem>
                        <ListItemText
                            primary="HTML"
                            secondary={null}
                        />
                    </ListItem><ListItem>
                        <ListItemText
                            primary="React-Router-Dom"
                            secondary={null}
                        />
                    </ListItem>

                </List>
                </div>
            </div>
        )
    }
}
export default (About)