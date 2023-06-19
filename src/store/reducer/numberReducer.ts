import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TProps {
  numberData: any;
}

const initialState: TProps = {
  numberData: {},
};

const numberSlice = createSlice({
  initialState,
  name: 'numbers',
  reducers: {
    updateNumber(state: TProps, action: PayloadAction<TProps>) {
      state.numberData = action.payload;
    },
  },
});

export const {updateNumber} = numberSlice.actions;

export default numberSlice.reducer;
