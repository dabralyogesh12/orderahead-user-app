import React from "react";
import Grid from "@material-ui/core/Grid";
import DehazeIcon from "@material-ui/icons/Dehaze";
import Typography from "@material-ui/core/Typography";
import { RouteComponentProps } from "react-router-dom";
import { WithStyles, withStyles, createStyles } from "@material-ui/core";
import { theme as Theme } from "../../theme";

const styles = (theme: typeof Theme) =>
  createStyles({
    root: {
      height: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
    },
    headingRow: {},
    accountHeading: {},
    logoImage: {
      marginRight: theme.spacing(2.5),
    },
  });

interface IProps extends WithStyles<typeof styles> {}

interface IState {}

class CategoriesScroll extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction="row">
          <Grid item xs={12} className="startJustifiedFlex">
            <Typography variant="h6" display="inline">
              Categories
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(CategoriesScroll);
