import React from 'react';
import Grid from '@material-ui/core/Grid';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { RouteComponentProps } from 'react-router-dom';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { theme as Theme } from '../../theme';
import EventHeader from './EventHeader';
import SearchBar from './SearchBar';
import CategoriesScroll from './CategoriesScroll';
import PlacesFilter from './PlacesFilter';
import { event, stall } from '../../data/testData';
import StallCard from './StallCard';

const styles = (theme: typeof Theme) =>
  createStyles({
    root: {
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    headingRow: {},
    accountHeading: {},
  });

interface IProps extends WithStyles<typeof styles>, RouteComponentProps {}

interface IState {
  stalls: typeof stall[];
}

class DemoEvent extends React.Component<IProps, IState> {
  eventContainerRef: React.RefObject<HTMLInputElement>;

  constructor(props: IProps) {
    super(props);
    this.state = {
      stalls: [],
    };
    this.eventContainerRef = React.createRef();
  }

  componentDidMount() {
    this.getStalls();
  }

  getStalls = () => {
    this.setState({ stalls: event.stalls });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} ref={this.eventContainerRef}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <EventHeader
              history={this.props.history}
              location={this.props.location}
              match={this.props.match}
            />
          </Grid>
          <Grid item xs={10}>
            <SearchBar />
          </Grid>
          <Grid item xs={12}>
            <CategoriesScroll eventRef={this.eventContainerRef} />
          </Grid>
          <Grid item xs={10}>
            <PlacesFilter />
          </Grid>
          <Grid item xs={10} container direction="column">
            {this.state.stalls.map((item) => (
              <StallCard stall={item} key={stall._id} />
            ))}
          </Grid>
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
