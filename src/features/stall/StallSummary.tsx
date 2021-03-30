/* eslint-disable react/no-unused-prop-types */
import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';

interface IProps {
  stallName: string;
  rating: number;
  type: string[];
  distance: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    overlay: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: 'black',
    },
  })
);

export const StallSummary = (props: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.overlay}>
      <Typography>{props.stallName}</Typography>
    </div>
  );
};
