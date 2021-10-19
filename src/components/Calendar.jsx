import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

 export function Calendar() {
  return (
    <>
      <DayPicker
        // active={moment().add(1, "day")}
        // onDayClick={(day) => this.setState({ day })}
      />
    </>
  );
}

