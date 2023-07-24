import React, { useState } from "react";
import "../tailwind.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateRange() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="mt-2 rounded border border-lightgray w-4/5 px-4 py-4">
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
      />
    </div>
  );
}

export default DateRange;
