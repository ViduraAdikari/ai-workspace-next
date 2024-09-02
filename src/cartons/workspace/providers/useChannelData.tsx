import React, {ReactElement} from "react";
import {IMessage} from "@/store/features/workspace/workspaceReducerTypes";

export interface IChannelMessages {
  channelID: string
  messages?: IMessage[]
}

type ChannelMessageProviderProps = {
  value: IChannelMessages
  children: ReactElement
}

const ChannelMessageContext = React.createContext<IChannelMessages | undefined>(undefined);

const ChannelMessageProvider = (props: ChannelMessageProviderProps) => {
  return <ChannelMessageContext.Provider value={props.value}>{props.children}</ChannelMessageContext.Provider>;
}

const useChannelData = () => {
  const context = React.useContext(ChannelMessageContext);

  if (context === undefined) {
    throw new Error("ChannelMessageContext must be used inside a ChannelMessageProvider");
  }

  return context;
}

export {ChannelMessageProvider, useChannelData};
