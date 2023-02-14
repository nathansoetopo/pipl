import React from "react";
import { IoMdArrowDropdownCircle, AiOutlineCheckCircle } from "react-icons/all";

const ListLeads = ({ leads, isCheck, isCheckAll, setIsCheck, setIsCheckAll }) => {
  const statusLeads = {
    Completed: (
      <div className="flex items-center gap-1 border border-[#BDBDBD] rounded-full px-4 py-2">
        <AiOutlineCheckCircle className="text-[20px] text-[#2ECA8B]" />
        <p className="text-[12px] text-[#161C2D] font-semibold">Completed</p>
      </div>
    ),
  };

  const handleClickCheckboxAll = () => {
    setIsCheckAll(!isCheckAll);
    if (isCheckAll) {
      setIsCheck([]);
    } else {
      setIsCheck(leads.map((lead) => lead["email"]));
    }
  };

  const handleClickCheckbox = (e) => {
    const { id: email, checked } = e.target;
    if (checked) {
      setIsCheck([...isCheck, email]);
    } else {
      setIsCheck(isCheck.filter((item) => item !== email));
    }
  };

  return !leads.length ? null : (
    <>
      <div className="h-[580px] overflow-y-auto">
        <table className="w-full border-collapse table overflow-x-auto whitespace-nowrap">
          <thead className="h-[60px] shadow-[0_22px_26px_-10px_rgba(60,72,88,0.15)] sticky top-0 bg-white">
            <tr>
              <th className="w-[40px]">
                <div className="flex gap-2 items-center w-[80px]">
                  <input
                    type="checkbox"
                    name="allLeads"
                    id="allLeads"
                    className="focus:ring-0"
                    onChange={handleClickCheckboxAll}
                  />
                  <IoMdArrowDropdownCircle className="text-[20px]" />
                </div>
              </th>
              {Object.keys(leads[0]).map((keyLead) => (
                <th className="text-left capitalize pr-10" key={keyLead}>
                  {keyLead}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="w-full">
            {leads.map((lead, index) => {
              return (
                <React.Fragment key={index}>
                  <tr className="h-[100px] border-b">
                    <td>
                      <input
                        type="checkbox"
                        name="lead"
                        id={lead["email"]}
                        className="focus:ring-0"
                        onChange={handleClickCheckbox}
                        checked={isCheck.includes(lead["email"])}
                      />
                    </td>
                    {Object.keys(lead).map((keyLead) => (
                      <td className="pr-10" key={keyLead}>
                        <div className="flex flex-col gap-2">
                          <p className="text-[18px] text-[#161C2D]">{lead[keyLead]}</p>
                          {/* <div className="flex">{statusLeads["Completed"]}</div> */}
                        </div>
                      </td>
                    ))}
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end gap-4 items-center border-t border-black p-4">
        <p className="text-[#8492A6] text-[16px]">Showing {leads.length} lead</p>
        {/* <button className="bg-[#F8F9FAA6] border border-[#DEE2E6A6] text-[#3C4858A6] text-[16px] rounded-[6px] py-[10px] px-[20px]">
          No more to load
        </button> */}
      </div>
    </>
  );
};

export default ListLeads;
