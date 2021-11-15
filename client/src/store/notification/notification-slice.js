import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    message: null
  },
  reducers: {
    notification(state, action) {
      state.message = action.payload.message;
    },
  }
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice;