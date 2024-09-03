import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {useDispatch} from "react-redux";
import {DRAWER_WIDTH} from "@/const/values";
import MessageEditor from "@/cartons/workspace/messages/MessageEditor";
import {useAppSelector} from "@/store/hooks";
import {createGuest} from "@/app/lib/util";
import {useChannelData} from "@/cartons/workspace/providers/useChannelData";
import {IGuest, IMessage} from "@/store/features/workspace/workspaceReducerTypes";
import {setNewMessage, updateMessageRemoteStatus} from "@/store/features/workspace/workspaceSlice";
import {useTranslations} from "next-intl";
import {usePostMessage} from "@/cartons/workspace/hooks/usePostMessage";

const Editor: React.FC = () => {
  const {channelID} = useChannelData();
  const dispatch = useDispatch();

  const t = useTranslations("Workspace.Messages");

  const guest: IGuest | null = useAppSelector(state => state.workspace.guest);
  const user = guest ? guest : createGuest("AI User");

  const [messageText, setTextMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // to autofocus input on channel change
  const [toggleFocus, setToggleFocus] = useState(false);

  const time = new Date();
  const newMessage: IMessage | null = messageText ? {
    id: time.getTime() + "", text: messageText,
    user: user, time: time
  } : null;

  const {error, data} = usePostMessage(isSubmitted, channelID, newMessage);

  useEffect(() => {
    if (!data) {
      return;
    }
    setTextMessage(null);
    setIsSubmitted(false);

    const timeout = setTimeout(() => {
      dispatch(updateMessageRemoteStatus({channelID, message: data})); // updates client only status.
    }, 1800);

    return () => {
      clearTimeout(timeout);
    }
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!error) {
      return;
    }
    setIsSubmitted(false);
    alert(error);
  }, [error]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isSubmitted || !newMessage) {
      return;
    }
    // message preview set to client until added to remote
    dispatch(setNewMessage({channelID: channelID,
      message: {...newMessage, time: time.getTime(), isClientOnly: true}}));
  }, [isSubmitted]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleMessageChange = (text: string) => {
    setTextMessage(text);
  }

  const handleOnSubmit = () => {
    if (!newMessage) {
      return;
    }
    setIsSubmitted(true);
  }

   // gain focus to input again when selected channel changed.
  useEffect(() => {
    setTextMessage(null);
    setToggleFocus(toggleFocus => !toggleFocus); //to autofocus input on channel change
  }, [channelID]);

  return (
    <Box sx={{
      position: "fixed",
      bottom: "1em",
      width: {sm: `calc(100% - ${DRAWER_WIDTH}px)`, xs: "100%"},
      height: "160px",
      px: 3,
    }}>
      <MessageEditor messageText={messageText} toggleFocus={toggleFocus}
                     dictionary={{
                       placeholder: t("enterMessage"),
                       submitButton: t("submit")
                     }}
                     onMessageChange={handleMessageChange} onSubmitClick={handleOnSubmit}/>
    </Box>
  )
};

export default Editor;
