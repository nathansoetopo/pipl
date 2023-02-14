import React from "react";
import { GiPauseButton } from "react-icons/gi";
import { IoIosSave } from "react-icons/io";
import { IoRocket } from "react-icons/io5";
import { useSelector } from "react-redux";

function Actions({ handlerSaveOptions, handlerChangeStatusCampaign, id }) {
  const campaigns = useSelector((state) => state.campaign.campaigns);

  return (
    <>
      <button
        className="flex flex-row items-center gap-2 bg-white border border-[#006BFF] rounded-md py-4 px-8 text-[20px] text-[#006BFF] font-semibold"
        onClick={() => handlerSaveOptions()}
      >
        <IoIosSave />
        <span>Save</span>
      </button>
      {campaigns === null ? null : (
        <button
          className="flex flex-row items-center gap-2 bg-[#006BFF] rounded-md py-4 px-8 text-[20px] text-white font-semibold"
          onClick={() => handlerChangeStatusCampaign()}
        >
          {campaigns.find((campaign) => campaign.id === id).status === "Launch" ? (
            <IoRocket />
          ) : (
            <GiPauseButton />
          )}
          {campaigns.find((campaign) => campaign.id === id).status}
        </button>
      )}
    </>
  );
}

export default Actions;
