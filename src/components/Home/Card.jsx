import React from "react";
import CountUp from "react-countup";

const Card = ({ icon, title, percentage }) => {
  return (
    <div className="flex flex-row grow-[1.4] rounded-lg py-8 justify-around bg-[#5271FF]">
      <i className="fill-white">{icon}</i>
      <span className="flex flex-col gap-5">
        <p className="text-white font-semibold text-[24px] w-44">{title}</p>
        <p className="text-white font-semibold text-[40px]">
          <CountUp start={10} end={percentage} duration={2.8} separator=" " decimals={2} decimal="," suffix="%" />
        </p>
      </span>
    </div>
  );
};

export default Card;
