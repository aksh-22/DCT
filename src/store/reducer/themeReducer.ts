import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TProps {
  selectedTheme: any;
}

const initialState: TProps = {
  selectedTheme: {},
};

const themeSlice = createSlice({
  initialState,
  name: 'theme',
  reducers: {
    updateTheme(state: TProps, action: PayloadAction<object>) {
      state.selectedTheme = action.payload;
    },
  },
});

export const {updateTheme} = themeSlice.actions;

export default themeSlice.reducer;
