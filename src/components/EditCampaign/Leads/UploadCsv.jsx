import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import papa from "papaparse";
import Select from "react-select";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { WiMoonAltFirstQuarter, WiMoonAltThirdQuarter } from "react-icons/wi";
import { FcFactory } from "react-icons/fc";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDashboardCustomize, MdOutlineStopCircle } from "react-icons/md";
import { TbCloudUpload } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLeads } from "../../../features/campaigns/thunks";

function UploadCsv() {
  const [fileCsv, setFileCsv] = useState(null);
  const [dataCsv, setDataCsv] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const doNotImport = [];
  const { id } = useParams();

  const labelTypeData = [
    {
      value: 1,
      text: "Email",
      icon: <HiOutlineMail />,
    },
    {
      value: 2,
      text: "First Name",
      icon: <WiMoonAltFirstQuarter />,
    },
    {
      value: 3,
      text: "Last Name",
      icon: <WiMoonAltThirdQuarter />,
    },
    {
      value: 4,
      text: "Company",
      icon: <FcFactory />,
    },
    {
      value: 5,
      text: "Website",
      icon: <CgWebsite />,
    },
    {
      value: 6,
      text: "Custom Variable",
      icon: <MdOutlineDashboardCustomize />,
    },
    {
      value: 7,
      text: "Do not import",
      icon: <MdOutlineStopCircle />,
    },
  ];

  useEffect(() => {
    if (fileCsv !== null) {
      papa.parse(fileCsv, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          setDataCsv(result);
        },
      });
    }
  }, [fileCsv]);

  const handleChangeFileCsv = (newFile) => {
    setFileCsv(newFile);
  };

  const handlerClickBack = () => {
    navigate(-1);
  };

  const handlerOnChangeSelectType = (value, header) => {
    if (value === 7) {
      if (!doNotImport.includes(header)) {
        doNotImport.push(header);
      }
    } else if (doNotImport.includes(header)) {
      doNotImport.splice(doNotImport.indexOf(header), 1);
    }
  };

  const handlerUploadButton = () => {
    const filteredLeads = dataCsv.data.map((lead) => {
      let newLead = { ...lead };
      for (let key of doNotImport) {
        let { [key]: _, ...keep } = newLead;
        newLead = keep;
      }
      return newLead;
    });
    navigate(-1);
    dispatch(addLeads({ idCampaign: id, leads: filteredLeads }));
  };

  return (
    <div className="flex flex-row w-screen h-screen justify-center">
      <div className="flex flex-col w-[1024px] py-12 gap-8">
        <button className="flex flex-row gap-2 items-center" onClick={() => handlerClickBack()}>
          <IoIosArrowBack />
          <span className="text-[#006BFF]">Back to campaign edit</span>
        </button>
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-[24px]">Upload CSV File</h2>
          <FileUploader
            classes="!h-[150px] !max-w-[1024px]"
            name="file-csv"
            types={["csv"]}
            handleChange={(file) => handleChangeFileCsv(file)}
          />
        </div>
        {dataCsv.length < 1 ? null : (
          <div className="flex flex-col gap-10">
            <table className="w-full table-fixed">
              <thead>
                <tr className="h-[50px] border-0 border-b">
                  <th className="pr-8 text-left">Column Name</th>
                  <th className="pr-8 text-left">Select Type</th>
                  <th className="pr-8 text-left">Samples</th>
                </tr>
              </thead>
              <tbody>
                {dataCsv.meta.fields.map((header) => (
                  <tr className="h-[100px] border-0 border-b" key={header}>
                    <td className="pr-8">{header}</td>
                    <td className="pr-8">
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        name="types"
                        isSearchable={false}
                        options={labelTypeData}
                        onChange={(data) => handlerOnChangeSelectType(data.value, header)}
                        getOptionLabel={(option) => (
                          <div className="flex flex-row items-center">
                            {option.icon}
                            <span className="ml-2">{option.text}</span>
                          </div>
                        )}
                      />
                    </td>
                    <td className="pr-8">
                      {dataCsv.data.slice(0, 5).map((data, index) => (
                        <p key={index}>{data[header]}</p>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-col justify-center">
              <div className="mx-auto">
                <button
                  className="flex flex-row gap-2 items-center bg-[#2ECA8B] text-white px-6 py-4 rounded font-semibold uppercase"
                  onClick={() => handlerUploadButton()}
                >
                  <span>Upload All</span>
                  <TbCloudUpload className="text-white text-[24px]" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadCsv;
