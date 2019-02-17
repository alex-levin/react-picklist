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
    rightList: ["Subaru"],
    leftSelectedIndex: -1,
    rightSelectedIndex: -1
  };

  handleLeftListItemClick = (event, index) => {
    this.setState({ leftSelectedIndex: index });
  };

  handleRightListItemClick = (event, index) => {
    this.setState({ rightSelectedIndex: index });
  };

  handleArrowRightClick = event => {
    const { leftList } = this.state;
    const { rightList } = this.state;
    const { leftSelectedIndex } = this.state;
    if (leftSelectedIndex !== -1 && leftList.length > 0) {
      const leftSelectedItem = leftList[leftSelectedIndex];
      // append selected item to the right list
      this.setState({ rightList: [...rightList, leftSelectedItem] });
      // remove selected items from the left list
      this.setState({ leftList: [...leftList.slice(0, leftSelectedIndex), ...leftList.slice(leftSelectedIndex + 1)] });
    }
  };

  handleArrowLeftClick = event => {
    const { leftList } = this.state;
    const { rightList } = this.state;
    const { rightSelectedIndex } = this.state;
    if (rightSelectedIndex !== -1 && rightList.length > 0) {
      const rightSelectedItem = rightList[rightSelectedIndex];
      // append selected item to the left list
      this.setState({ leftList: [...leftList, rightSelectedItem] });
      // remove selected items from the right list
      this.setState({ rightList: [...rightList.slice(0, rightSelectedIndex), ...rightList.slice(rightSelectedIndex + 1)] });
    }
  };

  render() {
    const { classes } = this.props;
    const { leftList } = this.state;
    const { rightList } = this.state;

    const leftListItems = leftList.map((item, index) => <ListItem key={item}
      button
      //selected={index === 0}
      onClick={event =>
        this.handleLeftListItemClick(event, index)
      }
    >
      <ListItemText primary={item} />
    </ListItem>);

    const rightListItems = rightList.map((item, index) => <ListItem key={item}
      button
      //selected={index === 0}
      onClick={event =>
        this.handleRightListItemClick(event, index)
      }
    >
      <ListItemText primary={item} />
    </ListItem>);

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
              <ListItem button onClick={event =>
                this.handleArrowRightClick(event)
              }>
                <Icon>keyboard_arrow_right</Icon>
              </ListItem>
              <ListItem button onClick={event =>
                this.handleArrowLeftClick(event)
              }>
                <Icon>keyboard_arrow_left</Icon>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <List component="nav" dense={true}>
                {rightListItems}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
