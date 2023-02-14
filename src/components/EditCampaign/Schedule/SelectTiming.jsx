import React from "react";
import Select from "react-select";
import { getTimeZones } from "@vvo/tzdb";
import { IoMdTime } from "react-icons/io";

function Timing({ fromTimingRef, toTimingRef, timezoneRef }) {
  const times = [
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
    "23:59",
  ];
  const timezones = getTimeZones();
  return (
    <>
      <div className="flex flex-row gap-2 items-center font-semibold text-[20px]">
        <IoMdTime className="text-[#2eca8b]" /> Timing
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-1 w-[250px]">
          <p>FROM</p>
          <Select
            ref={fromTimingRef}
            className="basic-single"
            classNamePrefix="select"
            name="times"
            isSearchable={false}
            options={times.map((time) => {
              return { value: time, label: time };
            })}
          />
        </div>
        <div className="flex flex-col gap-1 w-[250px]">
          <p>TO</p>
          <Select
            ref={toTimingRef}
            className="basic-single"
            classNamePrefix="select"
            name="times"
            isSearchable={false}
            options={times.map((time) => {
              return { value: time, label: time };
            })}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 w-[516px]">
        <p>TIMEZONE</p>
        <Select
          ref={timezoneRef}
          className="basic-single"
          classNamePrefix="select"
          name="times"
          isSearchable={false}
          options={timezones.map((timezone) => {
            return { value: timezone.name, label: timezone.rawFormat };
          })}
        />
      </div>
    </>
  );
}

export default Timing;
