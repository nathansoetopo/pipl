import React from "react";
import { Button, Dropdown, Tooltip } from "flowbite-react";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiFilter } from "react-icons/hi";
import { RiDraftFill } from "react-icons/ri";
import { ImLink } from "react-icons/im";
import { FaPlay, FaPause, FaCheck, FaHeartBroken } from "react-icons/fa";
import { Link } from "react-router-dom";

const Filter = ({ setSearch, setFilter, filter }) => {
  const status = {
    Filter: {
      icon: <HiFilter className="scale-125 mr-2 text-[20px]" />,
      text: "Filter",
    },
    Active: {
      icon: <FaPlay className="text-[#5271FF] mr-2" />,
      text: "Active",
    },
    Paused: {
      icon: <FaPause className="text-[#FFAB00] mr-2" />,
      text: "Paused",
    },
    Draft: {
      icon: <RiDraftFill className="mr-2" />,
      text: "Draft",
    },
    Error: {
      icon: <FaHeartBroken className="text-[#FF3D00] mr-2" />,
      text: "Error",
    },
    Completed: {
      icon: <FaCheck className="text-[#2ECA8B] mr-2" />,
      text: "Completed",
    },
  };
  return (
    <section className="flex flex-row justify-between px-5">
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
            className="py-3 text-sm rounded-full pl-12 pr-5 outline outline-2 w-full text-[20px]"
            placeholder="Search..."
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div class="filter-btn">
          <Dropdown
            label={
              <span className="flex items-center font-medium text-[20px]">
                {filter === "" ? status.Filter.icon : status[filter].icon}
                {filter === "" ? status.Filter.text : status[filter].text}
              </span>
            }
            inline={true}
          >
            {Object.keys(status)
              .filter((stat) => {
                return filter === "" && stat == "Filter" ? false : true;
              })
              .map((stat, index) => {
                return (
                  <Dropdown.Item
                    onClick={() => {
                      setFilter(stat == "Filter" ? "" : status[stat].text);
                    }}
                    key={index}
                  >
                    <span className="flex text-[18px]">
                      {status[stat].icon}
                      {status[stat].text}
                    </span>
                  </Dropdown.Item>
                );
              })}
          </Dropdown>
        </div>
      </div>
      <Tooltip placement="left" content="Create Campaign">
        <Link to="/campaign/create" title="Create Campaign">
          <Button className="!bg-[#5271FF] hover:!bg-[#3d60fa] flex flex-row items-center gap-2 mr-2 font-semibold text-[18px]">
            <ImLink />
            ADD NEW
          </Button>
        </Link>
      </Tooltip>
    </section>
  );
};

export default Filter;
