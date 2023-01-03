import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UProps {
  user: any;
  isLoggedIn: boolean;
}

const initialState: UProps = {
  user: {},
  isLoggedIn: false,
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    updateUser(state: UProps, action: PayloadAction<object>) {
      state.user = action.payload;
    },
    setIsLoggedIn(state: UProps, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {updateUser, setIsLoggedIn} = userSlice.actions;

export default userSlice.reducer;
