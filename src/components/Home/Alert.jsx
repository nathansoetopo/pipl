import React from "react";

const Alert = () => {
  const emails = [
    {
      name: "yaro@piple.ai",
      status: ["Disonnected", "Low Open Rate", "SPF"],
    },
    {
      name: "jane@algorithmglobal.com",
      status: ["SPF", "DKIM"],
    },
    {
      name: "lucas@bestleadgen.com",
      status: ["Disconnected"],
    },
  ];
  return (
    <div className="bg-red-200 rounded-lg">
      <h5 className="font-semibold text-[20px]">These inboxes need attention:</h5>
      <div className="no-scrollbar flex flex-col h-36 overflow-auto">
        {emails.map((email, index) => {
          return (
            <div className="flex flex-row items-center justify-between mb-7" key={index}>
              <p className="font-medium ">{email.name}</p>
              <div className="flex flex-row flex-wrap justify-end w-[320px] gap-2">
                {email.status.map((stats, key) => {
                  return (
                    <span className="font-medium  text-white bg-red-500 rounded-lg px-3 py-1" key={key}>
                      {stats}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Alert;
