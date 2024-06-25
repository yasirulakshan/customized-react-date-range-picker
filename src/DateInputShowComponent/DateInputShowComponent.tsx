import { TextField } from "@mui/material";
import React from "react";

type DateInputShowComponentProps = {
  id: string;
  placeholder: string;
  onClick: React.MouseEventHandler<HTMLElement> | undefined;
  ref: React.Ref<HTMLDivElement>;
};

const DateInputShowComponent: React.FC<DateInputShowComponentProps> = ({
  id,
  placeholder,
  onClick,
  ref,
}) => {
  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    onClick && onClick(event);
  };
  return (
    <TextField
      id={id}
      value={placeholder}
      onClick={(e) => onClickHandler(e)}
      variant="outlined"
      ref={ref}
      sx={{ mt: 1 }}
      size="small"
    />
  );
};

export default DateInputShowComponent;
