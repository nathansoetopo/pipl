import React from "react";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import DateFilter from "./DateFilter";

const Header = () => {
  return (
    <div className="flex flex-row justify-between my-2">
      <h2 className="text-[#3E3E3E] text-[24px] font-semibold">My Campaign</h2>
      <div className="flex flex-row items-center gap-5">
        <span>|</span>
        <span className="bg-[#4A4A4A] px-3 py-1 text-white rounded-lg">
          Draft
        </span>
      </div>
      <div className="flex flex-row items-center gap-3">
        <select
          name="date"
          id="date"
          className="ring-transparent border-transparent focus:ring-transparent focus:border-white"
        >
          <option value="fourweeks">Last 4 weeks</option>
          <option value="twomonth">Last 2 month</option>
          <option value="lastyear">Last year</option>
          <option value="fouryears">Last 4 years</option>
        </select>
        <div className="flex flex-row items-center gap-2">
          <BsFillCalendarWeekFill />
          <DateFilter />
        </div>
      </div>
    </div>
  );
};

export default Header;
