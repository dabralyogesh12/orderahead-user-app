import React from "react";
import Grid from "@material-ui/core/Grid";
import DehazeIcon from "@material-ui/icons/Dehaze";
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
      width: '100%'
    },
    headingRow: {},
    accountHeading: {},
    logoImage: {
      marginRight: theme.spacing(2.5)
    }
  });

interface IProps extends WithStyles<typeof styles>, RouteComponentProps {}

interface IState {}

class EventHeader extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction="row">
          <Grid item xs={6} className='startJustifiedFlex'>
            <img src="/img/LogoSleek.png" />
          </Grid>
          <Grid item xs={6} className='endJustifiedFlex'>
            <img src="/img/search_logo.png" className={classes.logoImage} />
            <DehazeIcon />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default (withStyles(styles)(EventHeader));
