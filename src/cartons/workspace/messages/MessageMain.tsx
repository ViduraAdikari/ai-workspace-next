import React from "react";
import MessageList from "@/cartons/workspace/messages/MessageList";
import Editor from "@/cartons/workspace/messages/Editor";

const MessageMain: React.FC = () => {
  return (
    <React.Fragment>
      <MessageList/>
      <Editor/>
    </React.Fragment>
  )
};

export default MessageMain;
