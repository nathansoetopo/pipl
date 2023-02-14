import React, { useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
import Accounts from "./Accounts";

const index = () => {
  const [search, setSearch] = useState("");
  return (
    <main className="flex flex-col w-full p-8 gap-3 font-semibold">
      <h2 className="text-[32px] text-[#616161]">Emails Accounts</h2>
      <div className="flex flex-row order-first w-full gap-12 mb-7">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Filter setSearch={setSearch} />
      <Accounts search={search} />
    </main>
  );
};

export default index;
