import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateFilter = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <DatePicker
      className="placeholder:text-[#3E3E3E] rounded-lg p-0 border-none focus:border-none focus:ring-transparent"
      placeholderText="Custom Range"
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      dateFormat="MM/dd/yyyy"
      showYearDropdown
      scrollableYearDropdown
      maxDate={new Date()}
      closeOnScroll
    />
  );
};

export default DateFilter;
