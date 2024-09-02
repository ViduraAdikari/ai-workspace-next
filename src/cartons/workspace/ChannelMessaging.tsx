"use client";

import React, {FC} from "react";
import {useAppSelector} from "@/store/hooks";
import ChannelToolbar from "@/cartons/workspace/ChannelToolbar";
import {IChannel} from "@/store/features/workspace/workspaceReducerTypes";
import {ChannelMessageProvider} from "@/cartons/workspace/providers/useChannelData";
import MessageMain from "@/cartons/workspace/messages/MessageMain";

const ChannelMessaging: FC = () => {
  const channels: IChannel[] | null = useAppSelector(state => state.workspace.channels);
  const selectedChannel: IChannel | undefined = channels ?
    channels.find((channel: IChannel) => channel.isSelected) : undefined;

  const messagesNode = selectedChannel ?
    <ChannelMessageProvider value={{channelID: selectedChannel.id, messages: selectedChannel.messages}}>
      <MessageMain/>
    </ChannelMessageProvider>
    : <React.Fragment/>;

  return (
    <React.Fragment>
      <ChannelToolbar channelName={selectedChannel && selectedChannel.name}/>
      {messagesNode}
    </React.Fragment>
  )
}

export default ChannelMessaging;
