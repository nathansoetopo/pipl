import { createAsyncThunk } from "@reduxjs/toolkit";
import swal from "sweetalert";
import { BASE_URL } from "../../constant";
import axios from "axios";

const getAllCampaign = createAsyncThunk("campaign/get", async () => {
  const config = {
    method: "get",
    url: BASE_URL + "/campaign",
  };

  const response = await axios(config);
  return response.data.campaigns;
});

const createCampaign = createAsyncThunk("campaign/create", async ({ name }) => {
  const config = {
    method: "post",
    url: BASE_URL + "/campaign",
    data: {
      name: name,
    },
  };
  const response = await axios(config);
  swal({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
  });
  return response.data.campaign;
});

const deleteCampaign = createAsyncThunk("campaign/delete", async ({ idCampaign }) => {
  const config = {
    method: "delete",
    url: BASE_URL + "/campaign/" + idCampaign,
  };
  const response = await axios(config);
  return { status: response.status, idCampaign };
});

const changeStatusCampaign = createAsyncThunk("campaign/status", async ({ idCampaign }) => {
  const config = {
    method: "patch",
    url: `${BASE_URL}/campaign/${idCampaign}/status`,
    validateStatus: (status) => {
      return status >= 200 && status < 500;
    },
  };
  const response = await axios(config);
  console.log(response);
  return { status: response.status, idCampaign, campaignStatus: response.data.campaign.status };
});

const addLeads = createAsyncThunk("campaign/leads/add", async ({ idCampaign, leads }) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/campaign/${idCampaign}/leads`,
    data: leads,
  };
  const response = await axios(config);
  // return { status: response.status, newLeads: response.data.leads, idCampaign };
});

const duplicateCampaign = createAsyncThunk("campaign/duplicate", async ({ idCampaign }) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/campaign/${idCampaign}/duplicate`,
  };
  const response = await axios(config);
  return { status: response.status, newCampaign: response.data.campaign };
});

const renameCampaign = createAsyncThunk("campaign/rename", async ({ idCampaign, newName }) => {
  const config = {
    method: "patch",
    url: `${BASE_URL}/campaign/${idCampaign}/name`,
    data: { name: newName },
  };
  const response = await axios(config);
  return { status: response.status, newName: response.data.campaign.name, idCampaign };
});

export {
  getAllCampaign,
  createCampaign,
  deleteCampaign,
  changeStatusCampaign,
  addLeads,
  duplicateCampaign,
  renameCampaign,
};
