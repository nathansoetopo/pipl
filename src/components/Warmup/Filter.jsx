import React from "react";
import { Button, Dropdown, Tooltip } from "flowbite-react";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiFilter } from "react-icons/hi";
import { RiDraftFill } from "react-icons/ri";
import { FaPlay, FaPause, FaCheck, FaHeartBroken } from "react-icons/fa";
import { ImLink } from "react-icons/im";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { BASE_URL } from "../../constant";
import { useDispatch } from "react-redux";
import { addAccount } from "../../features/accounts/thunks";

const Filter = ({ setSearch }) => {
  const dispatch = useDispatch();

  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const responseUserInfo = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokenResponse["access_token"]}`
      );
      console.log(responseUserInfo);
      dispatch(
        addAccount({
          email: responseUserInfo["data"]["email"],
          firstName: responseUserInfo["data"]["given_name"],
          lastName: responseUserInfo["data"]["family_name"],
        })
      );
    },
    onError: (errorResponse) => console.log(errorResponse),
    scope: "https://www.googleapis.com/auth/userinfo.profile",
  });

  return (
    
    <section className="flex flex-row justify-between mt-5 mb-8">
      <div className="flex flex-row gap-3 items-center w-[30%]">
        <div className="relative w-full text-gray-600 focus-within:text-gray-500">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="pl-3">
              <BiSearchAlt2 className="scale-150" />
            </button>
          </span>
          <input
            type="search"
            name="search"
            className="py-3 text-sm rounded-full pl-12 pr-5 outline outline-pink outline-2 outline-blue-gray-50 w-full text-[20px]"
            placeholder="Search..."
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Dropdown
          label={
            <span className="flex items-center text-[20px]">
              <HiFilter className="scale-125 mr-2 text-[20px]" /> Filter
            </span>
          }
          inline={true}
        >
          <Dropdown.Item>
            <span className="flex text-[18px]">
              <FaPlay className="text-[#5271FF] mr-2" />
              Active
            </span>
          </Dropdown.Item>
          <Dropdown.Item>
            <span className="flex text-[18px]">
              <FaPause className="text-[#FFAB00] mr-2" />
              Paused
            </span>
          </Dropdown.Item>
          <Dropdown.Item>
            <span className="flex text-[18px]">
              <RiDraftFill className="mr-2" />
              Draft
            </span>
          </Dropdown.Item>
          <Dropdown.Item>
            <span className="flex text-[18px]">
              <FaHeartBroken className="text-[#FF3D00] mr-2" />
              Error
            </span>
          </Dropdown.Item>
          <Dropdown.Item>
            <span className="flex text-[18px]">
              <FaCheck className="text-[#2ECA8B] mr-2" />
              Completed
            </span>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <Tooltip placement="left" content="Create Campaign">
        <Button
          className="flex flex-row items-center gap-2 mr-2 font-semibold btn-add text-[18px]"
          onClick={() => loginGoogle()}
        >
          <ImLink />
          ADD NEW
        </Button>
      </Tooltip>
    </section>
  );
};

export default Filter;
