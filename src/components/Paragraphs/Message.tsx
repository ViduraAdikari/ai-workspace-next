import React, {PropsWithChildren} from "react";
import Typography from "@mui/material/Typography";

type MessageProps = {
  text: string
}

const Message: React.FC<MessageProps> = (props: PropsWithChildren<MessageProps>) => {

  const {text} = props;

  return (
    <Typography variant="body2"
                sx={{
                  py: 1,
                }}>
      {text}
    </Typography>
  )
};

export default Message;
