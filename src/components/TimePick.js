import React, { useState } from "react";
import TimePicker from "react-time-picker";
import "../tailwind.css";
import "react-clock/dist/Clock.css";
import "react-time-picker/dist/TimePicker.css";

function TimePick(props) {

  return (
    <div className="mt-2 rounded border border-lightgray w-4/5 px-4 py-4">
      <TimePicker onChange={(val) => props?.fetchTime(val)} value={props?.time} />
    </div>
  );
}

export default TimePick;
