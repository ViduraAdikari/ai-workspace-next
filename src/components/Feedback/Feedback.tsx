import React, {PropsWithChildren} from "react";
import Alert from "@mui/material/Alert";
import {AlertColor} from "@mui/material/Alert/Alert";
import {isRoundedBorders} from "@/const/values";
import {SxProps} from "@mui/system/styleFunctionSx";

type FeedbackProps = {
  color: AlertColor
  text: string
  onClose?: () => void
}

const styles: SxProps = {
  fontSize: ".9em",
  borderRadius: isRoundedBorders ? "7px" : 0,
  py: "2px",
  '& .MuiAlert-icon': {
    alignItems: 'center',
  }
};

const Feedback: React.FC<FeedbackProps> = (props: PropsWithChildren<FeedbackProps>) => {

  const {color, text, onClose} = props;

  if (onClose) {
    return (
      <Alert sx={styles}
             severity={color}
             onClose={onClose}>
        {text}
      </Alert>
    )
  }

  return (
    <Alert sx={styles}
           severity={color}>
      {text}
    </Alert>
  )
}

export default Feedback;
