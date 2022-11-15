import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface tickerState {
  tickers: string[];
}

const initialState: tickerState = {
  tickers: ['btc', 'eth'],
};

export const tickersSlice = createSlice({
  name: 'watch',
  initialState,
  reducers: {
    addTicker: (state, action: PayloadAction<string>) => {
      state.tickers.push(action.payload.toLowerCase());
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTicker, } = tickersSlice.actions;

export default tickersSlice.reducer;