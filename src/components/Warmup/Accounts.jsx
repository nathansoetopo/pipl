import React from "react";
import { useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { BiError, BiPaperPlane, BiMessageDetail, BiCheckShield } from "react-icons/bi";
import { HiInboxArrowDown } from "react-icons/hi2";
import { GiHealthNormal } from "react-icons/gi";
import { GoPrimitiveDot, GoFlame } from "react-icons/go";
import Loader from "../Loader";

const Accounts = ({ search }) => {
  const accounts = useSelector((state) => state.account.accounts);

  return !accounts ? (
    <div className="relative">
      <Loader />
    </div>
  ) : (
    <div className="shadow">
    <table className="table-auto border-separate border-spacing-2 w-full">
      <tbody>
        {accounts
          .filter((account) => {
            return search.toLowerCase() === ""
              ? account
              : account.email.toLowerCase().includes(search);
          })
          .map((account, index) => {
            return (
              <tr className="rounded-lg" key={index}>
                <td className="px-2 py-5 w-[20%]">{account.email}</td>
                <td className="px-2 py-5">
                  <div className="justify-center gap-2">
                    <BiError className="fill-[#DD112A] text-[32px]" />
                  </div>
                </td>
                <td className="px-2 py-5">
                  <div className="flex flex-row justify-center gap-2 items-center">
                    <BiPaperPlane className="fill-[#9C9C9C] text-[32px]" />
                    <span className="text-[#454545]">0</span>
                  </div>
                </td>
                <td className="px-2 py-5">
                  <div className="flex flex-row justify-center gap-2 items-center">
                    <BiMessageDetail className="fill-[#9C9C9C] text-[32px]" />
                    <span className="text-[#454545]">0</span>
                  </div>
                </td>
                <td className="px-2 py-5">
                  <div className="flex flex-row justify-center gap-2 items-center">
                    <BiCheckShield className="fill-[#9C9C9C] text-[32px]" />
                    <span className="text-[#454545]">0</span>
                  </div>
                </td>
                <td className="px-2 py-5">
                  <div className="flex flex-row justify-center gap-2 items-center">
                    <HiInboxArrowDown className="fill-[#9C9C9C] text-[32px]" />
                    <span className="text-[#454545]">0</span>
                  </div>
                </td>
                <td className="px-2 py-5">
                  <div className="flex flex-row justify-center gap-2 items-center">
                    <GiHealthNormal className="fill-[#9C9C9C] text-[28px]" />
                    <span className="text-[#454545]">0</span>
                  </div>
                </td>
                <td className="px-2 py-5">
                  <div className="flex flex-row justify-center gap-2 items-center">
                    <GoPrimitiveDot className="fill-[#dd112a] blur-[2px] text-[24px]" />
                    <span className="text-[#454545]">14 days</span>
                  </div>
                </td>
                <td className="px-5 py-5">
                  <div className="flex flex-row justify-center gap-10 items-center">
                    {/* <Button className="bg-[#DD112A]  font-[Poppins] capitalize drop-shadow-[0_3px_3px_rgba(221,17,42,0.5)] text-white">
                    Fix Account
                  </Button> */}
                    <GoFlame className="fill-[#DD112A] text-[24px]" />
                    <IoMdSettings className="fill-[#454545] text-[24px] cursor-pointer transition-all hover:opacity-75 hover:rotate-45" />
                    <BsThreeDots className="fill-[#929292] text-[24px] cursor-pointer transition-all hover:fill-[#454545]" />
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
    </div>
  );
};

export default Accounts;
