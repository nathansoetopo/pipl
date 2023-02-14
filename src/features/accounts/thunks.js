import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constant";
import axios from "axios";

const getAllAccount = createAsyncThunk("account/get", async () => {
  const config = {
    method: "get",
    url: BASE_URL + "/account",
  };

  const response = await axios(config);
  return response.data.accounts;
});

const addAccount = createAsyncThunk("account/add", async ({ email, firstName, lastName }) => {
  const config = {
    method: "post",
    url: BASE_URL + "/account",
    data: {
      email,
      firstName,
      lastName,
    },
  };
  const response = await axios(config);
  return response.data.account;
});

export { getAllAccount, addAccount };
