import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import logo from '../../assets/logo.png';

interface IProps {
  standardTime: number;
  skipLineTime: number;
  // eslint-disable-next-line react/no-unused-prop-types
  logo: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingRight: theme.spacing(1.2),
      paddingLeft: theme.spacing(1.2),
    },
    headerItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    skipLine: {
      color: 'blue',
    },
  })
);

export const StallHeader = (props: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4} className={classes.headerItem}>
          <Typography className={classes.skipLine}>
            Skip the Line - ${props.skipLineTime}
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.headerItem}>
          <img src={logo} alt="Stall Logo" />
        </Grid>
        <Grid item xs={4} className={classes.headerItem}>
          <Typography>Standard Line - ${props.standardTime}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};
