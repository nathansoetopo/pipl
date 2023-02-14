import React from "react";
import { Tabs } from "flowbite-react";
import Analytic from "./Analytic";
import Leads from "./Leads";
import Sequences from "./Sequences";
import Options from "./Options";
import Schedule from "./Schedule";

const index = () => {
  return (
    <div className="container py-20 px-28 h-screen">
      <Tabs.Group aria-label="Tabs with underline" style="underline">
        <Tabs.Item
          active={true}
          title={<span className="text-[24px] font-semibold">Analytic</span>}
        >
          <Analytic />
        </Tabs.Item>
        <Tabs.Item title={<span className="text-[24px] font-semibold">Leads</span>}>
          <Leads />
        </Tabs.Item>
        <Tabs.Item title={<span className="text-[24px] font-semibold">Sequences</span>}>
          <Sequences />
        </Tabs.Item>
        <Tabs.Item title={<span className="text-[24px] font-semibold">Schedule</span>}>
          <Schedule />
        </Tabs.Item>
        <Tabs.Item title={<span className="text-[24px] font-semibold">Options</span>}>
          <Options />
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
};

export default index;
