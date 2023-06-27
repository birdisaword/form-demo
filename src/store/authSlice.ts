import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../types';
import axios from 'axios';

export interface AuthState {
  loggedIn: boolean;
}

const initialState: AuthState = {
  loggedIn: false,
};

export const login = (email: string, password: string): AppThunk => async (dispatch) => {
  try {
    const response = await axios.post('https://expa.fly.dev/auth/login', {
      email,
      password
    });

    const { accessToken, refreshToken } = response.data;

    // Store tokens in local storage or secure storage
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    dispatch(setLoggedIn(true));
  } catch (error) {
    // Handle error
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setLoggedIn } = authSlice.actions;

export default authSlice.reducer;