import React from 'react';
import Grid from '@material-ui/core/Grid';
import BottomNavigationBar from './BottomNavigationBar';

export default function WithNavigation<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <>
      <div style={{ position: 'relative', marginBottom: '60px' }}>
        <Component {...props} />
        <Grid
          container
          xs={12}
          sm={9}
          lg={5}
          style={{
            bottom: 0,
            position: 'fixed',
            left: '50%',
            transform: 'translate(-50%, 0)',
          }}
        >
          {/* @ts-ignore */}
          <BottomNavigationBar history={props.history} />
        </Grid>
      </div>
    </>
  );
}
