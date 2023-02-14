import React from "react";
import { MdOutlineStopCircle } from "react-icons/md";

function StopSendingEmail({ isStopSendingEnable, setIsStopSendingEnable }) {
  return (
    <>
      <div className="flex flex-row gap-2 items-center pb-4">
        <div className="bg-[#006BFF] rounded-full p-2">
          <MdOutlineStopCircle className="text-[28px] text-white" />
        </div>
        <h3 className="text-[20px] font-semibold">Stop sending emails on reply</h3>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[#9A9A9A] text-[16px]">
          Stop sending emails to a lead if response has been received
        </p>
        <div className="flex flex-row">
          <button
            className={`px-4 py-2 border rounded-l-lg bg-${
              !isStopSendingEnable ? "gray-500" : "white"
            } text-${!isStopSendingEnable ? "white" : "black"}`}
            onClick={() => setIsStopSendingEnable(false)}
          >
            Disable
          </button>
          <button
            className={`px-4 py-2 border rounded-r-lg bg-${
              isStopSendingEnable ? "green-500" : "white"
            } text-${isStopSendingEnable ? "white" : "black"}`}
            onClick={() => setIsStopSendingEnable(true)}
          >
            Enable
          </button>
        </div>
      </div>
    </>
  );
}

export default StopSendingEmail;
