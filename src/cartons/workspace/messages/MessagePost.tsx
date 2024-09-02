import React, {PropsWithChildren} from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {IGuest, IMessage} from "@/store/features/workspace/workspaceReducerTypes";
import Avatar from "@/components/Avatar";
import {DateLabel, NameLabel} from "@/components/Labels";
import Message from "@/components/Paragraphs";

type MessagePostProps = {
  message: IMessage
}

const MessagePost: React.FC<MessagePostProps> = (props: PropsWithChildren<MessagePostProps>) => {

  const {message} = props;

  const guest: IGuest = message.user;

  const renderInProgress = () => {
    if (!message.isClientOnly) {
      return;
    }

    return (
      <Box sx={{pt: "3px"}}>
        <CircularProgress size="1rem" />
      </Box>
    )
  }

  return (
    <Stack direction="row" sx={{mb: 3}}>
      {guest.avatar && <Avatar avatarIcon={guest.avatar}/>}
      <Stack sx={{
        px: 2,
      }}>

        <Stack direction="row">
          <NameLabel text={guest.nickname}/>
          <DateLabel date={message.time}/>
          {renderInProgress()}
        </Stack>

        <Message text={message.text}/>
      </Stack>

    </Stack>
  )
};

export default MessagePost;
