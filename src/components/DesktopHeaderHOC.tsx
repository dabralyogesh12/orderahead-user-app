import React from 'react';
import { isDesktop } from '../utils';
import DesktopHeader from '../features/event/DesktopHeader';

export default function DesktopHeaderHOC<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <>
      {!isDesktop() ? (
        <Component {...props} />
      ) : (
        <div style={{ position: 'relative' }}>
          <DesktopHeader />
          <Component {...props} />
        </div>
      )}
    </>
  );
}