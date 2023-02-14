import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const AiSystem = ({ categorySpam, colorsChecker, message }) => {
  const [score, setScore] = useState(0);

  const textCategory = {
    urgency: "🚨 Urgency ",
    shady: "🔞 Shady ",
    overpromise: "🤩 Overpromise ",
    unnatural: "💬 Unnatural ",
    money: "💰 Money ",
  };

  useEffect(() => {
    let newScore = 0;
    for (let categoryName of Object.keys(categorySpam)) {
      if (categorySpam[categoryName] > 0) {
        switch (categoryName) {
          case "money":
          case "shady":
            newScore += 20;
            break;
          case "urgency":
          case "overpromise":
            newScore += 10;
            break;
        }
      }
    }
    setScore(newScore);
  }, [categorySpam]);

  return (
    <div className="flex flex-col rounded-lg overflow-hidden shadow-md grow w-[43%] h-[450px]">
      <div className="flex flex-row justify-center items-center bg-[#E1E1E1] h-[80px]">
        <span className="font-semibold text-[20px]">Check the Variant</span>
      </div>
      <div className="flex flex-col gap-8 px-10 py-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between ">
            <p>Overall Score:</p>
            {score > 20 ? (
              <p className="text-red-500 font-semibold">Poor</p>
            ) : score > 5 ? (
              <p className="text-yellow-500 font-semibold">Okay</p>
            ) : (
              <p className="text-green-500 font-semibold">Great</p>
            )}
          </div>
          <div className="flex flex-row justify-between">
            <p>Word Count:</p>
            <p className="font-semibold">{!message ? 0 : message.split(" ").length}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {Object.keys(categorySpam).map((category, index) => {
            return !categorySpam[category] ? null : (
              <div key={index} className="flex flex-row gap-1 rounded shadow-md">
                <div className={`h-full w-[10px] rounded-l ${colorsChecker[category]}`}></div>
                <p className="p-2">
                  {textCategory[category]} ({categorySpam[category]})
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AiSystem;
