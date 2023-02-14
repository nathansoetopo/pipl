import React from "react";
import {
  FaHandshake,
  FaInfoCircle,
  FaUsers,
  FaRegCheckCircle,
  FaHeartBroken,
} from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { MdOutlineSick } from "react-icons/md";
import { BiEnvelope, BiMessageSquareCheck } from "react-icons/bi";

const Statistic = () => {
  return (
    <div className="flex flex-row gap-14 my-10">
      <div className="flex flex-row justify-around items-center grow-[2] h-full shadow-box p-5 rounded-lg">
        <div className="flex flex-col items-center">
          <span className="text-[24px]">
            <FaHandshake className="fill-[#8A8888]" />
          </span>
          <span className="text-[24px] text-[#5271FF]">-</span>
          <span className="text-[14px] font-semibold">Contacted</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[24px]">
            <GiPartyPopper className="fill-[#8A8888]" />
          </span>
          <span className="text-[24px] text-[#5271FF]">-</span>
          <span className="flex flex-row gap-1 items-center text-[14px] font-semibold">
            Positive
            <span>
              <FaInfoCircle className="fill-[#8A8888]" />
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[24px]">
            <BiEnvelope className="fill-[#8A8888]" />
          </span>
          <span className="text-[24px] text-[#5271FF]">-</span>
          <span className="flex flex-row gap-1 items-center text-[14px] font-semibold">
            Opened
            <span>
              <FaInfoCircle className="fill-[#8A8888]" />
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[24px]">
            <BiMessageSquareCheck className="fill-[#8A8888]" />
          </span>
          <span className="text-[24px] text-[#5271FF]">-</span>
          <span className="flex flex-row gap-1 items-center text-[14px] font-semibold">
            Replied
            <span>
              <FaInfoCircle className="fill-[#8A8888]" />
            </span>
          </span>
        </div>
      </div>
      <div className="flex flex-col grow h-full shadow-box px-5 py-2 rounded-lg">
        <span className="text-[16px] font-semibold border-b-[1.5px] py-4">Campaign Stats</span>
        <div className="flex flex-row">
          <div className=" flex flex-col grow">
            <span className="flex flex-row items-center gap-2 grow py-2">
              <span className="text-[20px]">
                <FaUsers />
              </span>
              <span className="text-[13px]">Leads</span>
            </span>
            <span className="flex flex-row items-center gap-2 grow py-2">
              <span className="text-[20px] text-[#2ECA8B]">
                <FaRegCheckCircle />
              </span>
              <span className="text-[13px]">Completed</span>
            </span>
            <span className="flex flex-row items-center gap-2 grow py-2">
              <span className="text-[20px] text-[#E43F52]">
                <MdOutlineSick />
              </span>
              <span className="text-[13px]">Bounced</span>
            </span>
            <span className="flex flex-row items-center gap-2 grow py-2">
              <span className="text-[20px] text-[#F76815]">
                <FaHeartBroken />
              </span>
              <span className="text-[13px]">Unsubscribed</span>
            </span>
          </div>
          <div className=" flex flex-col grow">
            <span className="py-2 text-[#5271FF]">0</span>
            <span className="py-2 text-[#5271FF]">0</span>
            <span className="py-2 text-[#5271FF]">0</span>
            <span className="py-2 text-[#5271FF]">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
