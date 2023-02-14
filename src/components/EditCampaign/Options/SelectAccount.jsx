import React, { useState } from "react";
import { useSelector } from "react-redux";
import { HiOutlineMail } from "react-icons/hi";
import Select from "react-select";

function SelectAccount({ selectAccountsRef }) {
  const accounts = useSelector((state) => state.account.accounts);
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  return (
    <>
      <div className="flex flex-row gap-2 items-center pb-4">
        <div className="bg-[#006BFF] rounded-full p-2">
          <HiOutlineMail className="text-[28px] text-white" />
        </div>
        <h3 className="text-[20px] font-semibold">Accounts to use</h3>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[#9A9A9A] text-[16px]">
          Select one or more accounts to send emails from
        </p>
        <Select
          ref={selectAccountsRef}
          className="basic-multi-select"
          classNamePrefix="select"
          name="accounts"
          isMulti
          isSearchable={false}
          onChange={(value) => {
            setSelectedAccounts(value);
          }}
          options={
            accounts
              ? accounts.map((account) => ({ label: account["email"], value: account["_id"] }))
              : []
          }
        />
        <p className="text-[#9A9A9A] text-[14px]">{selectedAccounts.length} selected</p>
      </div>
    </>
  );
}

export default SelectAccount;
