/* eslint no-param-reassign: 0 */ // --> OFF
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../types';
import config from '../../config';

export interface EventState {
  loading: boolean;
  location: object;
}

const initialState: EventState = {
  loading: false,
  location: {
    lat: null,
    lng: null,
    place: '',
  },
};

const EventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<{ location: Object }>) {
      state.location = action.payload.location;
    },
  },
});

export const { setLocation } = EventSlice.actions;

export default EventSlice.reducer;

export const getLocation = (state: RootState) => state.event.location;
