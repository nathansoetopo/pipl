import React from "react";
import Header from "./Header/";
import { Alert } from "flowbite-react";
import LineChart from "./LineChart";
import Statistic from "./Statistic";

const index = () => {
  return (
    <div className="flex flex-col h-[780px]">
      <Header />
      <main>
        <LineChart className="z-0" />
        {/* <Alert className="!bg-white flex !flex-row justify-center shadow-box">
          <span className="flex flex-row text-[#8492A6] text-[16px] tracking-wide">
            No data available for specified time
          </span>
        </Alert> */}
      </main>
      <Statistic />
    </div>
  );
};

export default index;
