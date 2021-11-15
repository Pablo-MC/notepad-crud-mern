import { configureStore } from '@reduxjs/toolkit';

import authSlice from './auth/auth-slice';
import notificationSlice from './notification/notification-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    notification: notificationSlice.reducer,
  }
});

export default store;