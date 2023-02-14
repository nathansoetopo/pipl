import React from "react";
import { BsCalendarWeek } from "react-icons/bs";
import ReactDatePicker from "react-datepicker";
import { forwardRef } from "react";
import { IoIosUndo } from "react-icons/io";

function Date({ fromDate, handlerSetFromDate, toDate, handlerSetToDate, handlerSaveSchedule }) {
  const CustomInputDatePicker = forwardRef((props, ref) => (
    <button className="text-[#006BFF] font-semibold" onClick={props.onClick} ref={ref}>
      {props.value || props.placeholder}
    </button>
  ));

  return (
    <>
      <div className="flex flex-col gap-4 flex-grow">
        <div className="flex flex-row gap-5 items-center">
          <div className="flex flex-row gap-2 items-center">
            <BsCalendarWeek />
            <span className="font-semibold">Start</span>
          </div>
          <div className="h-3/4 w-[2px] bg-gray-400"></div>
          <div className="flex flex-row gap-2 items-center">
            {!fromDate ? null : (
              <button onClick={() => handlerSetFromDate(null)}>
                <IoIosUndo />
              </button>
            )}
            <ReactDatePicker
              selected={fromDate}
              handlerSelected={handlerSetFromDate}
              onChange={(date) => handlerSetFromDate(date)}
              customInput={<CustomInputDatePicker />}
              placeholderText="Now"
              dateFormat="MMMM dd, yyyy"
            />
          </div>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <div className="flex flex-row gap-2 items-center">
            <BsCalendarWeek />
            <span className="font-semibold">End</span>
          </div>
          <div className="ml-[10px] h-3/4 w-[2px] bg-gray-400"></div>
          <div className="flex flex-row gap-2 items-center">
            {!toDate ? null : (
              <button onClick={() => handlerSetToDate(null)}>
                <IoIosUndo />
              </button>
            )}
            <ReactDatePicker
              selected={toDate}
              onChange={(date) => handlerSetToDate(date)}
              customInput={<CustomInputDatePicker />}
              placeholderText="No end date"
              dateFormat="MMMM dd, yyyy"
            />
          </div>
        </div>
      </div>
      <div>
        <button
          className="bg-[#006BFF] text-white text-[16px] font-bold px-4 py-2 rounded-md"
          onClick={() => handlerSaveSchedule()}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default Date;
