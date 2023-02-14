import { createSlice } from "@reduxjs/toolkit";
import {
  addLeads,
  changeStatusCampaign,
  createCampaign,
  deleteCampaign,
  duplicateCampaign,
  getAllCampaign,
  renameCampaign,
} from "./thunks";

export const campaignSlice = createSlice({
  name: "campaign",
  initialState: {
    campaigns: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCampaign.fulfilled, (state, action) => {
      state.campaigns = action.payload;
    });
    builder.addCase(createCampaign.fulfilled, (state, action) => {
      state.campaigns = [...state.campaigns, action.payload];
      console.log(state.campaigns);
    });
    builder.addCase(deleteCampaign.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.campaigns = state.campaigns.filter((campaign) => {
          return campaign.id !== action.payload.idCampaign;
        });
      }
    });
    builder.addCase(changeStatusCampaign.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.campaigns = state.campaigns.map((campaign) => {
          if (campaign.id === action.payload.idCampaign) {
            return { ...campaign, status: action.payload.campaignStatus };
          }
          return campaign;
        });
      }
    });
    builder.addCase(duplicateCampaign.fulfilled, (state, actions) => {
      if (actions.payload.status === 200) {
        state.campaigns = [...state.campaigns, actions.payload.newCampaign];
      }
    });
    builder.addCase(renameCampaign.fulfilled, (state, actions) => {
      if (actions.payload.status === 200) {
        state.campaigns = state.campaigns.map((campaign) => {
          if (campaign.id === actions.payload.idCampaign) {
            return { ...campaign, name: actions.payload.newName };
          }
          return campaign;
        });
      }
    });
  },
});

// export const {} = campaignSlice.actions;
export default campaignSlice.reducer;
