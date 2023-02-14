import React from "react";
import CountUp from "react-countup";

const Card = () => {
  return (
    <div className="flex flex-col px-6 py-5 rounded-xl bg-5271FF text-white">
      <span className="text-[18px]">Warm-up Email Sent</span>
      <span className="text-[18px]">
        <CountUp start={10} end={18} duration={1.8} separator=" " decimals={2} decimal="," suffix="K" />
      </span>
    </div>
  );
};

export default Card;
