import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import dayjs from "dayjs";
import CalenderDropDown from "../CalenderDropDown/CalenderDropDown";

interface CustomHeaderProps {
  date: Date;
  changeYear: (year: number) => void;
  changeMonth: (month: number) => void;
  decreaseMonth: () => void;
  increaseMonth: () => void;
}

export const years = Array.from(
  { length: new Date().getFullYear() - 1989 + 1 },
  (_, i) => (i + 1990).toString()
);

export const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const CustomHeader: React.FC<CustomHeaderProps> = ({
  date,
  changeMonth,
  changeYear,
  decreaseMonth,
  increaseMonth,
}) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 1,
          alignItems: "center",
        }}
      >
        <IconButton sx={{ p: "2px" }} onClick={decreaseMonth}>
          <ChevronLeftOutlinedIcon />
        </IconButton>
        <Typography variant="body2" fontWeight="bold">
          {dayjs(date).format("MMMM YYYY")}
        </Typography>
        <IconButton sx={{ p: "2px" }} onClick={increaseMonth}>
          <ChevronRightOutlinedIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          px: 1,
          alignItems: "center",
        }}
      >
        <CalenderDropDown
          values={months}
          id="months"
          nowValue={date.getMonth()}
          isMonth
          onChange={changeMonth}
        />
        <CalenderDropDown
          values={years}
          id="years"
          nowValue={date.getFullYear()}
          onChange={changeYear}
        />
      </Box>
    </Box>
  );
};

export default CustomHeader;
