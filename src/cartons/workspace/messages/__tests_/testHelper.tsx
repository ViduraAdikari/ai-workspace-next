import React from 'react';
import {ChannelMessageProvider} from "@/cartons/workspace/providers/useChannelData";

type EditBlogRealProviderProps = {
  children: React.ReactNode
}

const AIWorkspaceMockProvider: React.FC<EditBlogRealProviderProps> = ({children}: EditBlogRealProviderProps) => {
  return (
    <ChannelMessageProvider value={{channelID: '1', messages: []}}>
      <React.Fragment>
        {children}
      </React.Fragment>
    </ChannelMessageProvider>
  )
}

export {AIWorkspaceMockProvider}
