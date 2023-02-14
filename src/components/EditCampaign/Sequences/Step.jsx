import React from "react";
import { FaRegEnvelope, FaTrash, FaPlus, FaCircle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FiCircle } from "react-icons/fi";

const Step = ({
  selectedStep,
  selectedVariant,
  sequencesEditable,
  handlerChangeWaitForNextStep,
  handlerChangeSelectedVariant,
  handlerAddNewVariant,
  handlerAddNewStep,
  handlerRemoveStep,
  handlerRemoveVariant,
}) => {
  return (
    <div className="flex flex-row gap-4 overflow-x-auto">
      {sequencesEditable.map((sequence, indexStep) => {
        return (
          <div className="flex flex-col min-w-[300px] w-[300px]" key={indexStep}>
            <div className=" bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-row justify-between border-b-2 p-4">
                <div className="flex flex-row items-center gap-2">
                  <FaRegEnvelope />
                  <span>Step {indexStep + 1}</span>
                </div>
                {sequencesEditable.length > 1 ? (
                  <div className="flex flex-row items-center gap-3">
                    <button onClick={() => handlerRemoveStep(indexStep)}>
                      <FaTrash />
                    </button>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-4 p-4 h-[140px] overflow-y-auto">
                {sequence["variants"].map((variant, indexVariant) => {
                  return (
                    <React.Fragment key={indexVariant}>
                      <div className="flex flex-row gap-2 items-center justify-between">
                        <button
                          onClick={() => handlerChangeSelectedVariant(indexStep, indexVariant)}
                        >
                          {indexStep == selectedStep && indexVariant == selectedVariant ? (
                            <FaCircle className="text-blue-600 text-[16px]" />
                          ) : (
                            <FiCircle className="text-[16px]" />
                          )}
                        </button>
                        <span className="flex-grow text-left whitespace-nowrap overflow-hidden overflow-ellipsis text-[16px]">
                          {variant["subject"] || "<Empty Subject>"}
                        </span>
                        <div className="flex flex-row items-center">
                          {sequence["variants"].length > 1 ? (
                            <button onClick={() => handlerRemoveVariant(indexStep, indexVariant)}>
                              <AiOutlineClose className="text-[16px]" />
                            </button>
                          ) : null}
                        </div>
                      </div>
                      <hr />
                    </React.Fragment>
                  );
                })}
              </div>
              <div className="flex flex-col">
                <button
                  className="flex flex-row items-center justify-center py-2 gap-1 font-semibold"
                  onClick={() => handlerAddNewVariant(indexStep)}
                >
                  <FaPlus className="fill-[#006BFF]" /> Add variant
                </button>
              </div>
            </div>
            {sequencesEditable.length - 1 === indexStep ? (
              <button
                className="border-2 border-[#126CFF] text-[#126CFF] rounded-lg mt-4 py-2 font-semibold"
                onClick={() => handlerAddNewStep()}
              >
                Add Step
              </button>
            ) : (
              <div className="flex flex-row gap-2 items-center py-2 px-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <p className="text-[#161C2D] text-[14px] font-semibold">wait for</p>
                <input
                  name="waitForNextStep"
                  type="number"
                  value={sequence["waitForNextStep"]}
                  onChange={(e) => {
                    handlerChangeWaitForNextStep(indexStep, e.target.value);
                  }}
                  className="w-[60px] border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:ring-0"
                />
                <p className="text-[#161C2D] text-[14px] font-semibold">days, then</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Step;
