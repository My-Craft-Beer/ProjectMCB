import { configureStore, createSlice } from "@reduxjs/toolkit";

const result = createSlice({
  name: "result",
  initialState: { hop: 0, black: 0, malt: 0, bacteria: 0 },
  // [홉, 흑맥주, 몰트, 효모]

  reducers: {
    hopPlus(state) {
      state.hop += 1;
    },
    hopLover(state) {
      state.hop += 3;
    },
    blackPlus(state) {
      state.black += 1;
    },
    blackLover(state) {
      state.black += 3;
    },
    maltPlus(state) {
      state.malt += 1;
    },
    maltLover(state) {
      state.malt += 3;
    },
    bacteriaPlus(state) {
      state.bacteria += 1;
    },
    bacteriaLover(state) {
      state.bacteria += 3;
    },
  },
});

export let {
  hopPlus,
  blackPlus,
  maltPlus,
  bacteriaPlus,
  hopLover,
  blackLover,
  maltLover,
  bacteriaLover,
} = result.actions;

export default configureStore({
  reducer: {
    result: result.reducer,
  },
});
