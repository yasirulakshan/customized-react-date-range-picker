import { Box, Select, SelectChangeEvent } from "@mui/material";
import React from "react";

interface CalenderDropDownProps {
  values: string[];
  onChange: (value: number) => void;
  id: string;
  nowValue: number;
  isMonth?: boolean;
}

const CalenderDropDown: React.FC<CalenderDropDownProps> = ({
  values,
  onChange,
  id,
  nowValue,
  isMonth,
}) => {
  const onSelect = (e: SelectChangeEvent<string>) => {
    isMonth
      ? onChange(values.indexOf(e.target.value))
      : onChange(parseInt(e.target.value));
  };

  return (
    <Box>
      <Select
        id={id}
        onChange={onSelect}
        sx={{
          textAlign: "left",
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
          fontWeight: 500,
        }}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        size="small"
        variant="outlined"
        value={isMonth ? values[nowValue] : nowValue.toString()}
        native
      >
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default CalenderDropDown;
