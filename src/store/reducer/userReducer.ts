import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UProps {
  user: any;
  isLoggedIn: boolean;
  token: string;
  shareLink: string;
}

const initialState: UProps = {
  user: {},
  isLoggedIn: false,
  token: '',
  shareLink: '',
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
    setShareLink(state: UProps, action: PayloadAction<string>) {
      console.log('action.payload', action.payload);
      state.shareLink = action.payload;
    },
  },
});

export const {updateUser, setToken, setShareLink} = userSlice.actions;

export default userSlice.reducer;
