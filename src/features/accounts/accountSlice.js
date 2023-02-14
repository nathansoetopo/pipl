import { createSlice } from "@reduxjs/toolkit";
import { addAccount, getAllAccount } from "./thunks";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    accounts: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllAccount.fulfilled, (state, action) => {
      state.accounts = action.payload;
    });

    builder.addCase(addAccount.fulfilled, (state, action) => {
      state.accounts = [...state.accounts, action.payload];
      console.log(state);
    });
  },
});

export default accountSlice.reducer;

export { getAllAccount };
