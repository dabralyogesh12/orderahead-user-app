import React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
// @ts-ignore
import { theme as Theme } from '../MaterialTheme';

const styles = (theme: typeof Theme) =>
  createStyles({
    root: {},
  });

interface IProps extends WithStyles<typeof styles>, RouteComponentProps {}

interface IState {}
class StallView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <div> This is TS demo</div>;
  }
}

export default StallView;
