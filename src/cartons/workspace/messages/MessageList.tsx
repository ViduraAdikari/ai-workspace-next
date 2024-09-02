import React from "react";
import Box from "@mui/material/Box";
import {useChannelData} from "@/cartons/workspace/providers/useChannelData";
import {IMessage} from "@/store/features/workspace/workspaceReducerTypes";
import MessagePost from "@/cartons/workspace/messages/MessagePost";
import {useTranslations} from "next-intl";

const MessageList: React.FC = () => {
  const t = useTranslations("Workspace.Messages");

  const {messages} = useChannelData();

  const renderMessages = () => {
    if (!messages) {
      return <label>{t("noMessagesInChannel")}</label>
    }

    return messages.map((message: IMessage) => <MessagePost key={new Date(message.time).getTime()}
                                                                           message={message}/>);
  }

  return (
    <Box sx={{px: 3, py: 4, height: "calc(100vh - 300px)", overflow: "auto"}}>
      {renderMessages()}
    </Box>
  )
};

export default MessageList;
