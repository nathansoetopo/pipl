import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/";
import Warmup from "./components/Warmup/";
import Dashboard from "./components/Dashboard/";
import Campaign from "./components/Campaign/";
import Auth from "./components/Auth/";
import Deal from "./components/Deal/";
import Roadmap from "./components/Roadmap/";
import Blog from "./components/Blog/";
import EditCampaign from "./components/EditCampaign/";
import CrateCampaign from "./components/Campaign/CreateCampaign";
import { useDispatch } from "react-redux";
import { getAllAccount } from "./features/accounts/thunks";
import { getAllCampaign } from "./features/campaigns/thunks";
import { useEffect } from "react";
import UploadCsv from "./components/EditCampaign/Leads/UploadCsv";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAccount());
    dispatch(getAllCampaign());
  }, []);

  return (
    <>
      <div className="flex w-screen">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Layout />}>
              <Route path="/warmup" element={<Warmup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/campaign" element={<Campaign />} />
              <Route path="/campaign/:id" element={<EditCampaign />} />
            </Route>
            <Route path="/auth" element={<Auth />} />
            <Route path="/deal" element={<Deal />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/campaign/create" element={<CrateCampaign />} />
            <Route path="/campaign/:id/uploadCsv" element={<UploadCsv />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
