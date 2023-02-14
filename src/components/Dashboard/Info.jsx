import React from "react";
import CountUp from "react-countup";

const Info = ({ topInfo, topInfoTitle, bottomInfo, bottomInfoTitle }) => {
  return (
    <div className="flex flex-col grow-[3]">
      <p className="text-[20px] font-medium">{topInfoTitle}</p>
      <p className="text-[#126CFF] text-[32px] font-medium mb-5">
        <CountUp end={topInfo} duration={2} />
      </p>
      <p className="text-[20px] font-medium">{bottomInfoTitle}</p>
      <p className="text-[#126CFF] text-[32px] font-medium">
        <CountUp end={bottomInfo} duration={2} />
      </p>
    </div>
  );
};

export default Info;
