import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListLeads from "./ListLeads";
import axios from "axios";
import { BASE_URL } from "../../../constant";
import Loader from "../../Loader";
import { useParams } from "react-router-dom";

const Index = () => {
  const [leads, setLeads] = useState(null);
  const [search, setSearch] = useState("");
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${BASE_URL}/campaign/${id}/leads`);
      if (response.status === 200) {
        setLeads(response.data.leads);
      }
    })();
  }, []);

  return leads == null ? (
    <Loader />
  ) : (
    <div className="flex flex-col">
      <Header
        {...{
          setSearch,
          setLeads,
          isCheck,
          isCheckAll,
          setIsCheckAll,
          setIsCheck,
          id,
        }}
      />
      <ListLeads
        {...{ isCheck, isCheckAll, setIsCheck, setIsCheckAll }}
        leads={leads.filter((lead) => {
          return search == "" ? lead["email"] : lead["email"].includes(search);
        })}
      />
    </div>
  );
};

export default Index;
