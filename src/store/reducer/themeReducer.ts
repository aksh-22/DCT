import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TProps {
  selectedTheme: any;
  buttonColor: string;
  gradientColor1: string;
  gradientColor2: string;
  textColor1: string;
}

const initialState: TProps = {
  selectedTheme: {},
  buttonColor: '',
  gradientColor1: '',
  gradientColor2: '',
  textColor1: '',
};

const themeSlice = createSlice({
  initialState,
  name: 'theme',
  reducers: {
    updateTheme(state: TProps, action: PayloadAction<TProps>) {
      Object.keys(action.payload).forEach(el => {
        state[el] = action.payload[el];
      });
    },
  },
});

export const {updateTheme} = themeSlice.actions;

export default themeSlice.reducer;
