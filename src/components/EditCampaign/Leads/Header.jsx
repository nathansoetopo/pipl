import React, { useRef } from "react";
import { Button, Dropdown, Tooltip } from "flowbite-react";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiFilter } from "react-icons/hi";
import { RiDraftFill } from "react-icons/ri";
import { FaPlay, FaPause, FaCheck, FaHeartBroken, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "../../../constant";
import { useNavigate } from "react-router-dom";

const Header = ({ setSearch, setLeads, isCheck, isCheckAll, setIsCheck, setIsCheckAll, id }) => {
  const inputFile = useRef(null);
  const navigate = useNavigate();

  const onButtonClick = () => {
    // inputFile.current.click();
    navigate(`/campaign/${id}/uploadCsv`);
  };

  // const onChangeFile = async (event) => {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   const file = event.target.files[0];
  //   const formData = new FormData();
  //   formData.append("leads", file);
  //   const { data } = await axios.post(`${BASE_URL}/campaign/${id}/uploadLeads`, formData, {
  //     headers: { "Content-Type": "multipart/form-data" },
  //   });
  //   setLeads(data.leads);
  // };

  const handlerRemoveLeads = async () => {
    const response = await axios.delete(`${BASE_URL}/campaign/${id}/leads`, {
      data: { emails: isCheck },
    });
    setLeads(response.data.leads);
    setIsCheck([]);
    setIsCheckAll(false);
  };

  return (
    <div className="flex flex-row justify-between mb-8 flex-none">
      <div className="flex flex-row gap-3 items-center w-[30%]">
        <div className="flex items-center p-2 shadow rounded">
          <input
            type="text"
            name="search"
            id="search"
            className="border-none focus:ring-0 p-0"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <BiSearchAlt2 className="text-[24px] text-[#0000008A]" />
        </div>
        {/* <Dropdown
          label={
            <span className="flex items-center font-medium text-[20px]">
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
        </Dropdown> */}
      </div>
      {isCheck.length || isCheckAll ? (
        <div className="flex items-center h-[42px]">
          <button onClick={() => handlerRemoveLeads()}>
            <FaTrashAlt className="text-[#FF3D00] text-[20px]" />
          </button>
        </div>
      ) : (
        <Tooltip placement="left" content="Import Leads">
          {/* <input type="file" id="file" ref={inputFile} className="hidden" onChange={onChangeFile} /> */}
          <Button
            className="!bg-[#5271FF] hover:!bg-[#3d60fa] flex flex-row items-center gap-2 mr-2 font-semibold text-[18px]"
            onClick={onButtonClick}
          >
            Import
          </Button>
        </Tooltip>
      )}
    </div>
  );
};

export default Header;
