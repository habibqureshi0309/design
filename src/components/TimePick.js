import React, { useState } from "react";
import TimePicker from "react-time-picker";
import "../tailwind.css";
import "react-clock/dist/Clock.css";
import "react-time-picker/dist/TimePicker.css";

function TimePick() {
  const [value, onChange] = useState("10:00");

  return (
    <div className="mt-2 rounded border border-lightgray w-4/5 px-4 py-4">
      <TimePicker onChange={onChange} value={value} />
    </div>
  );
}

export default TimePick;
