import { configureStore } from "@reduxjs/toolkit";
import Campaign from "./features/campaigns/campaignSlice";
import Account from "./features/accounts/accountSlice";

export default configureStore({
  reducer: {
    campaign: Campaign,
    account: Account,
  },
});
