import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {useDispatch} from "react-redux";
import {DRAWER_WIDTH} from "@/const/values";
import MessageEditor from "@/cartons/workspace/messages/MessageEditor";
import {useAppSelector} from "@/store/hooks";
import {createGuest} from "@/app/lib/util";
import {useChannelData} from "@/cartons/workspace/providers/useChannelData";
import {IGuest, IMessage} from "@/store/features/workspace/workspaceReducerTypes";
import {setNewMessage} from "@/store/features/workspace/workspaceSlice";
import {useTranslations} from "next-intl";

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

  const handleMessageChange = (text: string) => {
    setTextMessage(text);
  }

  const handleOnSubmit = () => {
    if (!messageText) {
      return;
    }

    const time = new Date();
    const newMessage: IMessage = {
      id: time.getTime() + "", text: messageText,
      user: user, time: time
    };

    dispatch(setNewMessage({channelID: channelID, message: {...newMessage, isClientOnly: true}}));
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
