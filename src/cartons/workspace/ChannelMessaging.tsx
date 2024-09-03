"use client";

import React, {FC, useEffect} from "react";
import {useAppSelector} from "@/store/hooks";
import ChannelToolbar from "@/cartons/workspace/ChannelToolbar";
import {IChannel, IMessage} from "@/store/features/workspace/workspaceReducerTypes";
import {ChannelMessageProvider} from "@/cartons/workspace/providers/useChannelData";
import MessageMain from "@/cartons/workspace/messages/MessageMain";
import {useMessages} from "@/cartons/workspace/hooks/useMessages";
import {useDispatch} from "react-redux";
import {setMessages} from "@/store/features/workspace/workspaceSlice";

const ChannelMessaging: FC = () => {
  const channels: IChannel[] | null = useAppSelector(state => state.workspace.channels);
  const selectedChannel: IChannel | undefined = channels ?
    channels.find((channel: IChannel) => channel.isSelected) : undefined;

  const dispatch = useDispatch();

  const selectedChannelID: string | undefined = selectedChannel ? selectedChannel.id : undefined
  const {remoteMessages, updatedChannel, error} = useMessages(selectedChannelID);

  useEffect(() => {
    console.log("updatedChannel", updatedChannel);
    console.log("remoteMessages", remoteMessages);

    if (updatedChannel === undefined) {
      return;
    }

    const timeout = setTimeout(() => {
      dispatchMessages(updatedChannel, remoteMessages);
    }, 500);

    return () => {
      clearTimeout(timeout);
    }
  }, [remoteMessages]); // eslint-disable-line react-hooks/exhaustive-deps

  const dispatchMessages = (channelID: string, messages: IMessage[] | null) => {
    dispatch(setMessages({channelID, messages}));
  }

  const messagesNode = selectedChannel ?
    <ChannelMessageProvider value={{channelID: selectedChannel.id, messages: selectedChannel.messages}}>
      <MessageMain/>
    </ChannelMessageProvider>
    : <React.Fragment/>;

  return (
    <React.Fragment>
      <ChannelToolbar channelName={selectedChannel && selectedChannel.name}
                      errorFetching={error !== undefined}/>
      {messagesNode}
    </React.Fragment>
  )
}

export default ChannelMessaging;
