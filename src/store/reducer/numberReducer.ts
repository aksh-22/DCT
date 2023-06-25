import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TProps {
  numbers: any;
  new_numbers: string;
}

const initialState: TProps = {
  numbers: {},
  new_numbers: '',
};

const numberSlice = createSlice({
  initialState,
  name: 'numbers',
  reducers: {
    updateNumber(state: TProps, action: PayloadAction<TProps>) {
      state.numbers = action.payload.numbers;
      state.new_numbers = action.payload.new_numbers;
    },
  },
});

export const {updateNumber} = numberSlice.actions;

export default numberSlice.reducer;
