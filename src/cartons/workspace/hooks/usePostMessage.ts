import {IMessage} from "@/store/features/workspace/workspaceReducerTypes";
import {useEffect, useState} from "react";
import {useMutation} from "@apollo/client";
import {POST_MESSAGE} from "@/cartons/workspace/graphql/mutations/postMessage";

export const usePostMessage = (isSubmitted: boolean, channelId: string, message: IMessage | null) => {
  const [submittedMessage, setSubmittedMessage] = useState<IMessage | null>(null);

  const [postMessage, {error, data}] = useMutation<{createMessage: IMessage}>(POST_MESSAGE);

  useEffect(() => {
    if (!data) {
      return;
    }
    setSubmittedMessage(data.createMessage);
  }, [data]);

  useEffect(() => {
    if (!isSubmitted || !message) {
      return;
    }

    postMessage({
      variables: {
        createMessageInput: {
          channelId: channelId,
          id: message.id,
          text: message.text,
          time: (new Date(message.time)).getTime(),
          // user: {...message.user, avatar: {...message.user.avatar, icon: message.user.avatar?.icon.src}},
          user: {...message.user, iconName: message.user.iconName, avatar: undefined},
        }
      }
    });
  }, [isSubmitted]) // eslint-disable-line react-hooks/exhaustive-deps

  return {error, data: submittedMessage};
}
