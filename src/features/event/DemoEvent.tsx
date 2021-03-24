import React from "react";
import Grid from "@material-ui/core/Grid";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { RouteComponentProps } from "react-router-dom";
import { WithStyles, withStyles, createStyles } from "@material-ui/core";
import { theme as Theme } from "../../theme";
import EventHeader from "./EventHeader";
import SearchBar from "./SearchBar";
import CategoriesScroll from "./CategoriesScroll";

const styles = (theme: typeof Theme) =>
  createStyles({
    root: {
      height: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      padding: theme.spacing(2),
    },
    headingRow: {},
    accountHeading: {},
  });

interface IProps extends WithStyles<typeof styles>, RouteComponentProps {}

interface IState {}

class DemoEvent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container>
          <EventHeader
            history={this.props.history}
            location={this.props.location}
            match={this.props.match}
          />
          <SearchBar />
          <CategoriesScroll />
          <Grid
            container
            direction="row"
            justify="center"
            alignContent="center"
          />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(DemoEvent);
