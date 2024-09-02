import React, {PropsWithChildren} from 'react';
import {getFormattedDate} from "@/util/util";
import InputLabel from "@mui/material/InputLabel";

type DateLabelProps = {
  date: Date
}

const DateLabel: React.FC<DateLabelProps> = (props: PropsWithChildren<DateLabelProps>) => {
  const {date} = props;
  const formattedDate: string = getFormattedDate(date,"MMM DD, YYYY, hh:mm A");
  const formattedTime: string = getFormattedDate(date,"hh:mm A");

  return (
    <InputLabel
      sx={{
        fontSize: {md: '.75em', xs: '.7em'},
        px: 2,
        pt: '5px',
        color: theme => theme.palette.text.secondary,
        lineHeight: '1.5em',
        display: 'inline-flex',
        fontWeight: 400,
      }}
      role='label'
      aria-label={formattedDate}
      title={formattedDate}
    >
      {formattedTime}
    </InputLabel>
  )
};

export default DateLabel;
