import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../constant";
import { getTimeZones } from "@vvo/tzdb";

import SelectDate from "./SelectDate";
import SelectDays from "./SelectDays";
import SelectTiming from "./SelectTiming";

function index() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [days, setDays] = useState([]);
  const fromTimingRef = useRef();
  const toTimingRef = useRef();
  const timezoneRef = useRef();
  const { id } = useParams();
  const timezones = getTimeZones();

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${BASE_URL}/campaign/${id}/schedule`);
      if (response.status === 200) {
        const schedule = response.data.schedule;
        setFromDate(schedule.date.start);
        setToDate(schedule.date.end);
        setDays(schedule.days);
        fromTimingRef.current.setValue({
          label: schedule.timing.from,
          value: schedule.timing.from,
        });
        toTimingRef.current.setValue({ label: schedule.timing.to, value: schedule.timing.to });
        const selectTimezone = timezones.find((timezone) => timezone.name === schedule.timezone);
        timezoneRef.current.setValue({
          label: selectTimezone.rawFormat,
          value: selectTimezone.name,
        });
      }
    })();
  }, []);

  const handlerSetFromDate = (newDate) => {
    setFromDate(newDate);
  };

  const handlerSetToDate = (newDate) => {
    setToDate(newDate);
  };

  const handlerToggleDays = (newDay) => {
    if (days.includes(newDay)) {
      setDays(days.filter((day) => day !== newDay));
    } else {
      setDays([...days, newDay]);
    }
  };

  const handlerSaveSchedule = async () => {
    const fromTiming = fromTimingRef.current.value;
    const toTiming = toTimingRef.current.value;
    const timezone = timezoneRef.current.value;

    const schedule = {
      days,
      timezone,
      date: {
        start: fromDate,
        end: toDate,
      },
      timing: {
        from: fromTiming,
        to: toTiming,
      },
    };

    const response = await axios.patch(`${BASE_URL}/campaign/${id}/schedule`, schedule);
    console.log(response);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-row w-[900px] rounded-lg shadow-lg px-8 py-8">
        <SelectDate
          fromDate={fromDate}
          handlerSetFromDate={handlerSetFromDate}
          toDate={toDate}
          handlerSetToDate={handlerSetToDate}
          handlerSaveSchedule={handlerSaveSchedule}
        />
      </div>
      <div className="flex flex-col gap-4 w-[900px] rounded-lg shadow-lg px-8 py-14">
        <SelectDays days={days} handlerToggleDays={handlerToggleDays} />
      </div>
      <div className="flex flex-col gap-4 w-[900px] rounded-lg shadow-lg px-8 py-14">
        <SelectTiming
          fromTimingRef={fromTimingRef}
          toTimingRef={toTimingRef}
          timezoneRef={timezoneRef}
        />
      </div>
    </div>
  );
}

export default index;
