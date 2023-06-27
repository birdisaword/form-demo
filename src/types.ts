import { PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './store/authSlice';
import { ThunkAction } from 'redux-thunk';
import { store } from './store/store';

export type RootState = {
  auth: AuthState;
};

export type AppThunk = ThunkAction<void, AuthState, null, PayloadAction<boolean>>;

export type AppDispatch = typeof store.dispatch;
