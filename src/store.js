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
    hopPlus3(state) {
      state.hop += 3;
    },
    hopPlus4(state) {
      state.hop += 4;
    },
    hopPlus5(state) {
      state.hop += 5;
    },
    hopPlus6(state) {
      state.hop += 6;
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
    blackPlus3(state) {
      state.black += 3;
    },
    blackPlus4(state) {
      state.black += 4;
    },
    blackPlus5(state) {
      state.black += 5;
    },
    blackPlus6(state) {
      state.black += 6;
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
    maltPlus3(state) {
      state.malt += 3;
    },
    maltPlus4(state) {
      state.malt += 4;
    },
    maltPlus5(state) {
      state.malt += 5;
    },
    maltPlus6(state) {
      state.malt += 6;
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
    bacteriaPlus3(state) {
      state.bacteria += 3;
    },
    bacteriaPlus4(state) {
      state.bacteria += 4;
    },
    bacteriaPlus5(state) {
      state.bacteria += 5;
    },
    bacteriaPlus6(state) {
      state.bacteria += 6;
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
  hopPlus3,
  hopPlus4,
  hopPlus5,
  hopPlus6,
  blackPlus2,
  blackPlus3,
  blackPlus4,
  blackPlus5,
  blackPlus6,
  maltPlus2,
  maltPlus3,
  maltPlus4,
  maltPlus5,
  maltPlus6,
  bacteriaPlus2,
  bacteriaPlus3,
  bacteriaPlus4,
  bacteriaPlus5,
  bacteriaPlus6,
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
