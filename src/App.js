import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  root: {
    width: "50%",
    maxWidth: 260,
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    height: 200
  }
});

class App extends Component {
  state = {
    leftList: ["Honda", "Toyota", "Mazda"],
    rightList: ["Subaru"]
  };

  handleLeftListItemClick = (event, index) => {
    const items = this.state.leftList;
    // remove selected items
    this.setState({ leftList: [...items.slice(0, index), ...items.slice(index + 1)] });
  };

  handleRightListItemClick = (event, index) => {
    console.log("index:" + index);
    this.setState({ selectedIndex: index });

    console.log(this.state);
  };

  render() {
    const { classes } = this.props;
    const { leftList } = this.state;
    const { rightList } = this.state;

    const leftListItems = leftList.map((item, index) => <ListItem key={item}
      button
      selected={this.state.selectedIndex === 0}
      onClick={event =>
        this.handleLeftListItemClick(event, index)
      }
    >
      <ListItemText primary={item} />
    </ListItem>);

    leftList.forEach((item, index) => console.log(item, index));

    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs>
            <Paper className={classes.paper}>
              <List component="nav" dense={true}>
                  {leftListItems}
              </List>
            </Paper>
          </Grid>
          <Grid item xs>
            <List component="nav" dense={true}>
              <ListItem button>
                <Icon>keyboard_arrow_right</Icon>
              </ListItem>
              <ListItem button>
                <Icon>keyboard_arrow_left</Icon>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <List component="nav" dense={true}>
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
