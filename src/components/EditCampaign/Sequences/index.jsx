import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../constant";
import Loader from "../../Loader";
import AiSystem from "./AiSystem";
import RichTextEditor from "./RichTextEditor";
import Step from "./Step";

const index = () => {
  const [sequencesDefault, setSequencesDefault] = useState(null);
  const [sequencesEditable, setSequencesEditable] = useState(null);
  const [selectedStep, setSelectedStep] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [categorySpam, setCategorySpam] = useState({
    urgency: 0,
    shady: 0,
    overpromise: 0,
    unnatural: 0,
    money: 0,
  });
  const colorsChecker = {
    urgency: "bg-[#f87171]",
    shady: "bg-[#f9a8d4]",
    overpromise: "bg-[#fdba74]",
    unnatural: "bg-[#d1d5db]",
    money: "bg-[#fcd34d]",
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${BASE_URL}/campaign/${id}/sequences`);
      setSequencesDefault(response["data"]["sequences"]);
      setSequencesEditable(response["data"]["sequences"]);
      setIsLoading(false);
    })();
  }, []);

  const handlerChangeSubject = (changedSubject) => {
    const newSequences = [...sequencesEditable];
    newSequences[selectedStep]["variants"][selectedVariant]["subject"] = changedSubject;
    setSequencesEditable(newSequences);
  };

  const handlerChangeMessage = (changedMessage) => {
    const newSequences = [...sequencesEditable];
    newSequences[selectedStep]["variants"][selectedVariant]["message"] = changedMessage;
    setSequencesEditable(newSequences);
  };

  const handlerChangeWaitForNextStep = (step, changedWaitNumber) => {
    const newSequences = [...sequencesEditable];
    newSequences[step]["waitForNextStep"] = changedWaitNumber;
    setSequencesEditable(newSequences);
  };

  const handlerChangeSelectedVariant = (step, variant) => {
    setSelectedStep(step);
    setSelectedVariant(variant);
  };

  const handlerAddNewVariant = (step) => {
    const newSequences = [...sequencesEditable];
    newSequences[step]["variants"].push({
      isEnabled: true,
      subject: null,
      message: null,
    });
    setSequencesEditable(newSequences);
  };

  const handlerAddNewStep = () => {
    setSequencesEditable([
      ...sequencesEditable,
      {
        waitForNextStep: 1,
        variants: [
          {
            isEnabled: true,
            subject: null,
            message: null,
          },
        ],
      },
    ]);
  };

  const handlerSaveSequences = async () => {
    const response = await axios.patch(`${BASE_URL}/campaign/${id}/sequences`, {
      sequences: sequencesEditable,
    });
  };

  const handlerRemoveStep = (step) => {
    const newSequences = [...sequencesEditable];
    newSequences.splice(step, 1);
    setSequencesEditable(newSequences);
  };

  const handlerRemoveVariant = (step, variant) => {
    const newSequences = [...sequencesEditable];
    newSequences[step]["variants"].splice(variant, 1);
    setSequencesEditable(newSequences);
  };

  return isLoading ? (
    <div className="relative">
      <Loader />
    </div>
  ) : (
    <div className="flex flex-col">
      <div className="flex flex-row gap-4">
        <RichTextEditor
          subject={sequencesEditable[selectedStep]["variants"][selectedVariant]["subject"]}
          message={sequencesEditable[selectedStep]["variants"][selectedVariant]["message"]}
          handlerChangeSubject={handlerChangeSubject}
          handlerSaveSequences={handlerSaveSequences}
          handlerChangeMessage={handlerChangeMessage}
          setCategorySpam={setCategorySpam}
          colorsChecker={colorsChecker}
          selectedStep={selectedStep}
          selectedVariant={selectedVariant}
        />
        <AiSystem
          categorySpam={categorySpam}
          colorsChecker={colorsChecker}
          message={sequencesEditable[selectedStep]["variants"][selectedVariant]["message"]}
        />
      </div>
      <div className="flex flex-row mt-4">
        <Step
          selectedStep={selectedStep}
          selectedVariant={selectedVariant}
          sequencesEditable={sequencesEditable}
          handlerChangeWaitForNextStep={handlerChangeWaitForNextStep}
          handlerChangeSelectedVariant={handlerChangeSelectedVariant}
          handlerAddNewVariant={handlerAddNewVariant}
          handlerAddNewStep={handlerAddNewStep}
          handlerRemoveStep={handlerRemoveStep}
          handlerRemoveVariant={handlerRemoveVariant}
        />
      </div>
    </div>
  );
};

export default index;
