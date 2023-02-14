import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { createCampaign } from "../../features/campaigns/thunks";

const CreateCampaign = () => {
  const refCampaignName = useRef();
  const dispatch = useDispatch();
  const goBack = useNavigate();
  return (
    <section className="flex flex-row w-screen h-screen justify-center items-center">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-[32px] text-[#3E3E3E]">Let's create a new campaign</h2>
        <small className="font-semibold text-[16px] text-[#999999] mb-10">
          What would you like to name it?
        </small>
        <div className="w-[600px] relative">
          <span className="absolute -top-3 -left-2 bg-white px-1">Campaign Name</span>
          <input
            type="text"
            className="outline-4 border-2 border-[#ccc] rounded-md py-2 px-3 h-20 w-full mb-10 text-[32px]"
            placeholder="campaign name"
            ref={refCampaignName}
          />
        </div>
        <div className="flex flex-row gap-4">
          <Button
            color="failure"
            onClick={() => goBack(-1)}
            variant="text"
            className="normal-case font-[Poppins] text-[14px]"
          >
            <p>Cancel</p>
          </Button>
          <Button
            className="normal-case font-[Poppins] text-[14px]"
            onClick={() => dispatch(createCampaign({ name: refCampaignName.current.value }))}
          >
            Continue
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CreateCampaign;
