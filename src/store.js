import { configureStore, createSlice } from "@reduxjs/toolkit";

const result = createSlice({
  name: "result",
  initialState: { hop: 0, black: 0, malt: 0, bacteria: 0 },
  // [홉, 흑맥주, 몰트, 효모]

  reducers: {
    hopPlus(state) {
      state.hop += 1;
    },
    hopPlus2(state) {
      state.hop += 2;
    },
    hopLover(state) {
      state.hop += 4;
    },
    blackPlus(state) {
      state.black += 1;
    },
    blackPlus2(state) {
      state.black += 2;
    },
    blackLover(state) {
      state.black += 5;
    },
    maltPlus(state) {
      state.malt += 1;
    },
    maltPlus2(state) {
      state.malt += 2;
    },
    maltLover(state) {
      state.malt += 3;
    },
    bacteriaPlus(state) {
      state.bacteria += 1;
    },
    bacteriaPlus2(state) {
      state.bacteria += 2;
    },
    bacteriaLover(state) {
      state.bacteria += 3;
    },
    restart(state) {
      state.hop = 0;
      state.black = 0;
      state.malt = 0;
      state.bacteria = 0;
      console.log(state.hop, state.malt, state.bacteria, state.black);
    },
  },
});

export let {
  hopPlus,
  blackPlus,
  maltPlus,
  bacteriaPlus,
  hopPlus2,
  blackPlus2,
  maltPlus2,
  bacteriaPlus2,
  hopLover,
  blackLover,
  maltLover,
  bacteriaLover,
  restart,
} = result.actions;

export default configureStore({
  reducer: {
    result: result.reducer,
  },
});
