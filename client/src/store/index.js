import { configureStore } from '@reduxjs/toolkit';

import authSlice from './auth/auth-slice';
import noteSlice from './note/note-slice';
import notificationSlice from './notification/notification-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    note: noteSlice.reducer,
    notification: notificationSlice.reducer
  }
});

export default store;