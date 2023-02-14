import React from "react";
import { Spinner } from "flowbite-react";

const Loader = () => {
  return (
    <div className="w-full h-[180px] flex flex-row justify-center items-center">
      <Spinner size="xl" />
    </div>
  );
};

export default Loader;
