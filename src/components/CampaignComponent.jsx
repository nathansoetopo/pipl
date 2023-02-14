import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlay, FaTrash } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { RiEdit2Line } from "react-icons/ri";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { CgRename } from "react-icons/cg";
import { GrDuplicate } from "react-icons/gr";
import {
  changeStatusCampaign,
  deleteCampaign,
  duplicateCampaign,
  renameCampaign,
} from "../features/campaigns/thunks";
import { GiPauseButton } from "react-icons/gi";
import { Modal } from "flowbite-react";
import { useRef } from "react";

const Campaign = ({ search, filter }) => {
  const dispatch = useDispatch();
  const campaigns = useSelector((state) => state.campaign.campaigns);
  const [idCampaignModal, setIdCampaignModal] = useState(null);
  const [inputRenameModal, setinputRenameModal] = useState(null);

  const bgColor = {
    Completed: "bg-[#2ECA8B]",
    Pause: "bg-[#FFAB00]",
    Draft: "bg-4A4A4A",
    Active: "bg-126CFF",
    Error: "bg-[#FF3D00]",
  };

  const handlerChangeStatusCampaign = (idCampaign) => {
    dispatch(changeStatusCampaign({ idCampaign }));
  };

  const handlerDuplicateCampaign = (idCampaign) => {
    dispatch(duplicateCampaign({ idCampaign }));
  };

  const handlerRenameCampaign = (idCampaign, newName) => {
    dispatch(renameCampaign({ idCampaign, newName }));
  };

  return !campaigns ? (
    <Loader />
  ) : (
    <table className="table-auto border-separate border-spacing-2 w-full">
      <thead>
        <tr>
          <th className="font-bold text-[18px] text-[#3D3D3D] text-left">Campaign</th>
          <th className="font-bold text-[18px] text-[#3D3D3D] text-left">Status</th>
          <th className="font-bold text-[18px] text-[#3D3D3D] text-left">Contacted</th>
          <th className="font-bold text-[18px] text-[#3D3D3D] text-left">Opened</th>
          <th className="font-bold text-[18px] text-[#3D3D3D] text-left">Replied</th>
          <th className="font-bold text-[18px] text-[#3D3D3D] text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {campaigns
          .filter((campaign) => {
            return search.toLowerCase() === ""
              ? campaign
              : campaign.name.toLowerCase().includes(search);
          })
          .filter((campaign) => {
            return filter.toLowerCase() === ""
              ? campaign
              : campaign.status.toLowerCase().includes(filter.toLowerCase());
          })
          .map((campaign, index) => {
            return (
              <tr className="" key={index}>
                <td className="px-3 py-2">
                  <div className="flex flex-col">
                    <h5 className="text-[18px] text-[#3D3D3D]">{campaign.name}</h5>
                    <small className="font-medium text-[16px] text-[#8E8E8E]">12 days ago</small>
                  </div>
                </td>
                <td className="px-3 py-2">
                  <span
                    className={`${
                      bgColor[campaign.status]
                    } px-4 py-2 rounded-md font-medium text-white`}
                  >
                    {campaign.status}
                  </span>
                </td>
                <td className="px-3 py-2">
                  <span className="text-[#126CFF]">
                    {campaign.contacted}
                  </span>
                </td>
                <td className="px-3 py-2">
                  <div className="flex flex-row items-center gap-2">
                    <span className="text-[#126CFF]">
                      {campaign.opened}
                    </span>
                    <span className="text-[#3D3D3D]">|</span>
                    <span className="text-[#3D3D3D]">
                      {((campaign.opened / campaign.contacted) * 100).toFixed(2)}%
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2">
                  <div className="flex flex-row items-center gap-2">
                    <span className="text-[#126CFF]">
                      {campaign.replied}
                    </span>
                    <span className="text-[#3D3D3D]">|</span>
                    <span className="text-[#3D3D3D]">
                      {((campaign.replied / campaign.contacted) * 100).toFixed(2)}%
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2">
                  <div className="flex flex-row justify-between">
                    <button onClick={() => handlerChangeStatusCampaign(campaign.id)}>
                      {campaign.status !== "Active" ? (
                        <FaPlay className="fill-[#2ECA8B] active:fill-light-blue-500 hover:cursor-pointer text-[30px]" />
                      ) : (
                        <GiPauseButton className="fill-[#FFAB00] active:fill-light-blue-500 hover:cursor-pointer text-[30px]" />
                      )}
                    </button>
                    <Link to={`/campaign/${campaign.id}`} title="edit campaign">
                      <RiEdit2Line className="fill-[#929292] active:fill-light-blue-500 hover:cursor-pointer text-[30px]" />
                    </Link>
                    <div className="flex flex-col justify-center">
                      <button
                        id={`dropdownDividerButton-${index}`}
                        type="button"
                        onFocus={() => {
                          document
                            .getElementById(`dropdownDivider-${index}`)
                            .classList.remove("hidden");
                        }}
                        onBlur={() => {
                          setTimeout(() => {
                            document
                              .getElementById(`dropdownDivider-${index}`)
                              .classList.add("hidden");
                          }, 100);
                        }}
                      >
                        <BsThreeDots className="fill-[#929292] active:fill-light-blue-500 hover:cursor-pointer text-[34px]" />
                      </button>
                      {/* Dropdown Three dots */}
                      <div
                        id={`dropdownDivider-${index}`}
                        className="absolute z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600 -translate-x-[70%] translate-y-[60%]"
                      >
                        <ul
                          className="py-1 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDividerButton"
                        >
                          <li>
                            <div>
                              <button
                                className="flex flex-row items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={() => {
                                  setIdCampaignModal(campaign.id);
                                  setinputRenameModal(campaign.name);
                                }}
                              >
                                <CgRename /> Rename
                              </button>
                              <Modal
                                show={idCampaignModal === campaign.id}
                                size="md"
                                popup={true}
                                onClose={() => {
                                  setIdCampaignModal(null);
                                  setinputRenameModal(null);
                                }}
                              >
                                <Modal.Header />
                                <Modal.Body>
                                  <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                      <span>New Name</span>
                                      <input
                                        type="text"
                                        defaultValue={campaign.name}
                                        onChange={(e) => setinputRenameModal(e.target.value)}
                                      />
                                    </div>
                                    <div className="flex flex-row gap-2 justify-end">
                                      <button
                                        className="text-red-500"
                                        onClick={() => setIdCampaignModal(null)}
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        onClick={() => {
                                          handlerRenameCampaign(campaign.id, inputRenameModal);
                                          setTimeout(() => {
                                            setIdCampaignModal(null);
                                          }, 100);
                                        }}
                                      >
                                        Rename
                                      </button>
                                    </div>
                                  </div>
                                </Modal.Body>
                              </Modal>
                            </div>
                          </li>
                          <li>
                            <button
                              className="flex flex-row items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => {
                                dispatch(deleteCampaign({ idCampaign: campaign.id }));
                              }}
                            >
                              <FaTrash /> Delete
                            </button>
                          </li>
                          <li>
                            <button
                              className="flex flex-row items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => handlerDuplicateCampaign(campaign.id)}
                            >
                              <GrDuplicate /> Duplicate
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Campaign;
