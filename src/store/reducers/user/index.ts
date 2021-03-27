import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store';

import { IUser } from '@interfaces';

export interface UserState {
  user?: IUser;
}

const initialState: UserState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => ({
      loaded: true,
      user: action.payload,
    }),
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState): UserState => state.userState;

export const userReducer = userSlice.reducer;
