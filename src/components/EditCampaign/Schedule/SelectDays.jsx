import React from "react";
import { BsFillSunFill } from "react-icons/bs";

function Days({ days, handlerToggleDays }) {
  const defaultDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <>
      <div className="flex flex-row gap-2 items-center font-semibold text-[20px]">
        <BsFillSunFill className="text-[#FFBF00]" /> Days
      </div>
      <div className="flex flex-row items-center gap-4">
        {defaultDays.map((day) => (
          <div className="flex flex-row items-center gap-2" key={day}>
            <input
              type="checkbox"
              className="focus:ring-0 focus:outline-none"
              checked={days.includes(day)}
              onChange={() => handlerToggleDays(day)}
            />
            {day}
          </div>
        ))}
      </div>
    </>
  );
}

export default Days;
