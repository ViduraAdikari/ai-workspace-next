import React, {PropsWithChildren} from "react";
import InputLabel from "@mui/material/InputLabel";

type NameLabelProps = {
  text: string
}

const NameLabel: React.FC<NameLabelProps> = (props: PropsWithChildren<NameLabelProps>) => {
  
  const {text} = props;
  
  return (
    <InputLabel
      sx={{
        fontSize: {md: "1em", xs: ".9em"},
        display: "inline-flex",
        color: theme => theme.palette.text.primary,
        fontWeight: 600,
      }}
      role="label"
      aria-label={text}
    >
      {text}
    </InputLabel>
  )
};

export default NameLabel;
