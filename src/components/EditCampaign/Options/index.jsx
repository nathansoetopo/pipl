import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../constant";
import { changeStatusCampaign } from "../../../features/campaigns/thunks";
import Actions from "./Actions";
import DailySendingLimit from "./DailySendingLimit";
import SelectAccount from "./SelectAccount";
import StopSendingEmail from "./StopSendingEmail";

function index() {
  const [isStopSendingEnable, setIsStopSendingEnable] = useState(true);
  const inputDailySendingLimitRef = useRef();
  const selectAccountsRef = useRef();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${BASE_URL}/campaign/${id}/options`);
      if (response.status === 200) {
        const options = response.data.options;
        selectAccountsRef.current.setValue(
          options.senders.map((sender) => ({ label: sender.email, value: sender._id }))
        );
        setIsStopSendingEnable(options.isStopSendingOnReply);
        inputDailySendingLimitRef.current.value = options.dailySendingLimit;
      }
    })();
  }, []);

  const handlerSaveOptions = async () => {
    const options = {
      senders: selectAccountsRef.current.getValue().map((item) => item.value),
      isStopSendingOnReply: isStopSendingEnable,
      dailySendingLimit: inputDailySendingLimitRef.current.value,
    };

    const response = await axios.patch(`${BASE_URL}/campaign/${id}/options`, options);
  };

  const handlerChangeStatusCampaign = async () => {
    dispatch(changeStatusCampaign({ idCampaign: id }));
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="w-[600px] px-4 py-6 shadow-lg rounded-lg">
        <SelectAccount selectAccountsRef={selectAccountsRef} />
      </div>
      <div className="w-[600px] px-4 py-6 shadow-lg rounded-lg">
        <DailySendingLimit inputDailySendingLimitRef={inputDailySendingLimitRef} />
      </div>
      <div className="w-[600px] px-4 py-6 shadow-lg rounded-lg">
        <StopSendingEmail
          isStopSendingEnable={isStopSendingEnable}
          setIsStopSendingEnable={setIsStopSendingEnable}
        />
      </div>
      <div className="flex flex-row justify-center gap-4 w-full border-0 border-t p-8">
        <Actions
          handlerSaveOptions={handlerSaveOptions}
          handlerChangeStatusCampaign={handlerChangeStatusCampaign}
          id={id}
        />
      </div>
    </div>
  );
}

export default index;
