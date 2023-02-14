import React, { useState } from "react";
import Campaign from "../CampaignComponent";
import Filter from "./Filter";

const index = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  return (
    <main className="flex flex-col gap-y-8 w-full p-8 mt-8">
      <h2 className="font-semibold text-[32px]">Campaign</h2>
      <Filter setSearch={setSearch} setFilter={setFilter} filter={filter} />

      <div class="shadow">
      <div className="overflow-auto w-full no-scrollbar h-[680px]">
        <Campaign search={search} filter={filter} />
      </div>
      </div>
    </main>
  );
};

export default index;
