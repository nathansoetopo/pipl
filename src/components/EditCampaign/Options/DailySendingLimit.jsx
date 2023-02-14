import React from "react";
import { HiUpload } from "react-icons/hi";

function DailySendingLimit({ inputDailySendingLimitRef }) {
  return (
    <>
      <div className="flex flex-row gap-2 items-center pb-4">
        <div className="bg-[#006BFF] rounded-full p-2">
          <HiUpload className="text-[28px] text-white" />
        </div>
        <h3 className="text-[20px] font-semibold">Daily Sending Limit</h3>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[#9A9A9A] text-[16px]">
          Max number of emails to send per day for this campaign
        </p>
        <input
          ref={inputDailySendingLimitRef}
          type="number"
          className="w-[100px] focus:ring-0 rounded"
          defaultValue={200}
        />
      </div>
    </>
  );
}

export default DailySendingLimit;
