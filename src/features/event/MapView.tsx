import React from 'react';
import Grid from '@material-ui/core/Grid';
import { WithStyles, withStyles, createStyles, Box } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '../../Typography';
import EventMap from './EventMap';
import { theme as Theme } from '../../theme';
import WithNavigation from '../../components/BottomNavigationHoc';
import AutoCompleteService from './AutoCompleteService';
import SearchBar from './SearchBar';

const styles = (theme: typeof Theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 60px)',
      width: '100%',
      position: 'relative',
    },
    searchContainer: {
      position: 'absolute',
      top: '30px',
      width: '90%',
      left: '50%',
      transform: 'translate(-50%, 0)',
      zIndex: 1000,
      height: '48px',
      backgroundColor: '#FFFFFF',
    },
  });

interface IProps extends WithStyles<typeof styles> {}

interface IState {
  place: string;
}

class MapView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      place: 'distance',
    };
    console.log('mapview');
  }

  setPlace = (place: string) => {
    this.setState({ place });
  };

  render() {
    const { classes } = this.props;
    const { place } = this.state;
    return (
      <Grid container item direction="row" xs={12} className={classes.root}>
        <Grid xs={12} item container className={classes.searchContainer}>
          <AutoCompleteService />
        </Grid>
        <EventMap />
      </Grid>
    );
  }
}

export default withStyles(styles)(WithNavigation(MapView));
