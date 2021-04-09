import { Map, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { stall } from '../../data/testData';
import config from '../../config';

interface IProps extends RouteComponentProps {
  width: Breakpoint;
}

interface IState {
  stalls: typeof stall[];
}

class EventMap extends React.Component<IProps, IState> {
  render() {
    return (
      // @ts-ignore
      <Map
        // @ts-ignore
        google={this.props.google}
        // @ts-ignore
        zoom={14}
        containerStyle={{ width: '100%', height: '100%', position: 'static' }}
        style={{ width: '100%', height: '100%' }}
      />
    );
  }
}

export default GoogleApiWrapper({
  // @ts-ignore
  apiKey: config.REACT_APP_GOOGLE_API_KEY,
  // @ts-ignore
})(EventMap);
