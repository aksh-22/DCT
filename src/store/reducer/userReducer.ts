import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UProps {
  user: any;
  isLoggedIn: boolean;
  token: string;
}

const initialState: UProps = {
  user: {},
  isLoggedIn: false,
  token: '',
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    updateUser(state: UProps, action: PayloadAction<object>) {
      state.user = action.payload;
    },
    setToken(state: UProps, action: PayloadAction<any>) {
      state.isLoggedIn = !!action?.payload?.token;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const {updateUser, setToken} = userSlice.actions;

export default userSlice.reducer;
