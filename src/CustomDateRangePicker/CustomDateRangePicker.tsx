import React, { forwardRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomDateRangePicker.css"; // Your custom CSS
import DateInputShowComponent from "../DateInputShowComponent/DateInputShowComponent";

interface CustomDateInputProps extends React.HTMLProps<HTMLButtonElement> {
  value?: string;
}

const CustomDateRangePicker: React.FC = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const CustomDateInput = forwardRef<HTMLButtonElement, CustomDateInputProps>(
    ({ value, onClick }, ref) => (
      <DateInputShowComponent
        id="date-picker"
        placeholder={value || "Select Date Range"}
        onClick={onClick}
        ref={ref as React.Ref<HTMLDivElement>}
      />
    )
  );

  useEffect(() => {
    if (dateRange[0]) {
      setStartDate(dateRange[0]);
    } else {
      setStartDate(undefined);
    }

    if (dateRange[1]) {
      setEndDate(dateRange[1]);
    } else {
      setEndDate(undefined);
    }
  }, [dateRange]);

  return (
    <DatePicker
      selectsRange={true} // Date range selecting enabled
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      calendarStartDay={1} // Starts from Monday
      customInput={<CustomDateInput />}
    />
  );
};

export default CustomDateRangePicker;
