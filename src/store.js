import { configureStore, createSlice } from "@reduxjs/toolkit";

const result = createSlice({
  name: "result",
  initialState: { hop: 0, black: 0, malt: 0, bacteria: 0 },
  // [홉, 흑맥주, 몰트, 효모]

  reducers: {
    hopPlus(state) {
      state.hop += 1;
    },

    blackPlus(state) {
      state.black += 1;
    },
    maltPlus(state) {
      state.malt += 1;
    },
    bacteriaPlus(state) {
      state.bacteria += 1;
    },
  },
});

export let { hopPlus, blackPlus, maltPlus, bacteriaPlus } = result.actions;

export default configureStore({
  reducer: {
    result: result.reducer,
  },
});
