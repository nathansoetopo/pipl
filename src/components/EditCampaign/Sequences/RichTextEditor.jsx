import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { useRef } from "react";
import { DATA_SPAM } from "../../../constant";
import { useEffect } from "react";

const RichTextEditor = ({
  subject,
  message,
  handlerChangeSubject,
  handlerSaveSequences,
  handlerChangeMessage,
  setCategorySpam,
  colorsChecker,
  selectedStep,
  selectedVariant,
}) => {
  const textAreaRef = useRef();
  const highlights = useRef();
  const backdrop = useRef();

  useEffect(() => {
    handlerChangedText(); // refresh backdrop and highlight when step or variant change
  }, [selectedStep, selectedVariant]);

  const categoryId = {
    urgency: 1,
    shady: 2,
    overpromise: 3,
    unnatural: 4,
    money: 5,
  };

  const handlerChangedText = () => {
    const text = textAreaRef.current.value;
    handlerChangeMessage(text);
    const highlightedText = applyHighlights(text);
    highlights.current.innerHTML = highlightedText;

    const newCategorySpam = {
      urgency: 0,
      shady: 0,
      overpromise: 0,
      unnatural: 0,
      money: 0,
    };
    for (let childHighlight of highlights.current.children) {
      switch (+childHighlight["id"]) {
        case 1:
          newCategorySpam["urgency"] = newCategorySpam["urgency"] + 1;
          break;
        case 2:
          newCategorySpam["shady"] = newCategorySpam["shady"] + 1;
          break;
        case 3:
          newCategorySpam["overpromise"] = newCategorySpam["overpromise"] + 1;
          break;
        case 4:
          newCategorySpam["unnatural"] = newCategorySpam["unnatural"] + 1;
          break;
        case 5:
          newCategorySpam["money"] = newCategorySpam["money"] + 1;
          break;
      }
    }
    setCategorySpam(newCategorySpam);
  };

  const applyHighlights = (text) => {
    for (let i = 0; i < DATA_SPAM.length; i++) {
      text = text.replace(DATA_SPAM[i]["highlight"], (replacedText) => {
        return `<mark id='${categoryId[DATA_SPAM[i]["category"]]}' class='${
          colorsChecker[DATA_SPAM[i]["category"]]
        }'>${replacedText}</mark>`;
      });
    }
    return text.replace(/\n$/g, "\n\n");
  };

  function handlerScroll() {
    var scrollTop = textAreaRef.current.scrollTop();
    backdrop.current.scrollTop(scrollTop);
  }

  return (
    <div className="flex flex-col grow w-[55%]">
      <div className="flex flex-row gap-4 border border-[#ccced1] p-4 rounded-t-lg">
        <div className="flex flex-row grow items-center gap-2">
          <label htmlFor="subject">Subject</label>
          <input
            name="subject"
            type="text"
            placeholder="Your Subject"
            value={subject || ""}
            onChange={(e) => {
              handlerChangeSubject(e.target.value);
            }}
            className="border-0 border-r border-[#ccced1] grow focus:ring-0"
          />
        </div>
        <button className="px-4 drop-shadow-[0_1px_5px_rgba(0,0,0,0.1)] bg-white rounded-md">
          <BsLightningChargeFill className="text-[#006BFF]" />
        </button>
        <button
          className="bg-[#006BFF] text-white text-[16px] font-bold px-4 py-3 rounded-md"
          onClick={() => handlerSaveSequences()}
        >
          Save
        </button>
      </div>
      <div className="relative w-full h-full">
        <div
          ref={backdrop}
          className="absolute w-full h-full p-4 overflow-auto text-transparent bg-white"
        >
          <div ref={highlights} className="whitespace-pre-wrap break-words"></div>
        </div>
        <textarea
          ref={textAreaRef}
          name="message"
          value={message || ""}
          placeholder="Your Message"
          className="absolute w-full border border-[#ccced1] p-4 rounded-b-lg focus:ring-0 focus:border-[#ccced1] m-0 bg-transparent resize-none h-full"
          onChange={handlerChangedText}
          onScroll={handlerScroll}
        ></textarea>
      </div>
    </div>
  );
};

export default RichTextEditor;
