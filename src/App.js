import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  root: {
    width: '50%',
    maxWidth: 260,
    backgroundColor: theme.palette.background.paper,
  },
});

class App extends Component {
  state = {
    selectedIndex: 0,
  };

  handleListItemClick = (event, index) => {
    console.log('index:' + index);
    this.setState({ selectedIndex: index });

    console.log(this.state);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs>
            <Paper>
              <List component="nav">
                <ListItem button selected={this.state.selectedIndex === 0}
                  onClick={event => this.handleListItemClick(event, 0)}>
                  <ListItemText primary="Honda" />
                </ListItem>
                <ListItem button
                  onClick={event => this.handleListItemClick(event, 1)}>
                  <ListItemText primary="Toyota" />
                </ListItem>
                <ListItem button
                  onClick={event => this.handleListItemClick(event, 2)}>
                  <ListItemText primary="Mazda" />
                </ListItem>                        
              </List>
            </Paper>          
          </Grid>
          <Grid item xs>
            <List component="nav">
              <ListItem button>
                <Icon>keyboard_arrow_right</Icon>
              </ListItem>
              <ListItem button>
                <Icon>keyboard_arrow_left</Icon>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs>
            <Paper>
              <List component="nav">
                <ListItem button>
                  <ListItemText primary="Subaru" />
                </ListItem>               
              </List>
            </Paper>              
          </Grid>          
        </Grid>
        Selected {this.state.selectedIndex}   
      </div>
    );
  }
}

export default withStyles(styles)(App);
