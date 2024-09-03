import {useLazyQuery} from "@apollo/client";
import {GET_CHANNEL_MESSAGES} from "@/cartons/workspace/graphql/queries/getChannelMessages";
import {useEffect, useState} from "react";
import {IMessage} from "@/store/features/workspace/workspaceReducerTypes";

export const useMessages = (channelID: string | undefined) => {
  const [remoteMessages, setRemoteMessages] = useState<IMessage[] | null>(null);
  const [getMessages, {error, data}] = useLazyQuery<{ messages: IMessage[] }>(GET_CHANNEL_MESSAGES);

  useEffect(() => {
    if (!data) {
      setRemoteMessages(null);
      return;
    }
    setRemoteMessages(data.messages);
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  const checkMessages = () => {
    if (!channelID) {
      return;
    }

    getMessages({
      variables: {channelId: channelID},
      fetchPolicy: "network-only",
      pollInterval: 3000,
    })
  }

  useEffect(() => {
    checkMessages();
  }, [channelID]); // eslint-disable-line react-hooks/exhaustive-deps

  return {remoteMessages, updatedChannel: channelID, error}
}
