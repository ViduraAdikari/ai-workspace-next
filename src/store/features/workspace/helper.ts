import {IChannel, IMessage} from "@/store/features/workspace/workspaceReducerTypes";

/**
 * sets selected channel's isSelected to ture
 * @param channelID
 * @param channels
 */
const updateSelectedChannel = (channelID: string, channels: IChannel[]): IChannel[] => {
  const previousSelectedChannelIndex: number = channels.findIndex((channel: IChannel) => channel.isSelected);
  const selectedChannelIndex: number = channels.findIndex((channel: IChannel) => channel.id === channelID);
  if (selectedChannelIndex < 0) {
    return channels;
  }

  previousSelectedChannelIndex > -1 && (channels[previousSelectedChannelIndex].isSelected = undefined);
  channels[selectedChannelIndex].isSelected = true;
  return channels;
}

/**
 * add new message to channel local state before remote refresh.
 * @param channels
 * @param channelID
 * @param newMessage
 */
const addMessagesToChannel = (channels: IChannel[], channelID: string, newMessage: IMessage): IChannel[] => {
  const updatedChannel: IChannel | undefined = channels.find((channel: IChannel) => channel.id === channelID);
  if (!updatedChannel) {
    return channels;
  }

  const allMessages = updatedChannel.messages ? updatedChannel.messages.slice() : [];
  allMessages.push(newMessage);
  updatedChannel.messages = allMessages;
  return channels;
}

/**
 * update the isClientOnly status of local state message after post success
 * @param channels
 * @param channelID
 * @param remoteMessage
 */
const setMessageRemoteStatus = (channels: IChannel[], channelID: string, remoteMessage: IMessage): IChannel[] => {
  const postedChannel: IChannel | undefined = channels.find((channel: IChannel) => channel.id === channelID);
  if (!postedChannel || !postedChannel.messages) {
    return channels;
  }

  const channelMessages: IMessage[] = postedChannel.messages.slice();

  const clientOnlyMessageIndex: number = channelMessages.findIndex((message: IMessage) =>
    message.id === remoteMessage.id);

  if (clientOnlyMessageIndex < 0) {
    return channels;
  }

  channelMessages[clientOnlyMessageIndex].isClientOnly = undefined;
  postedChannel.messages = channelMessages;
  return channels;
}

/**
 * update messages in channel from remote
 * @param channels
 * @param channelID
 * @param messages
 */
const updateMessagesInChannel = (channels: IChannel[], channelID: string, messages: IMessage[] | null):
  IChannel[] => {
  const updatedChannelIndex: number = channels.findIndex((channel: IChannel) => channel.id === channelID);

  if (updatedChannelIndex < 0) {
    return channels;
  }

  channels[updatedChannelIndex].messages = messages ? messages : undefined;
  return channels;
}

export {updateSelectedChannel, addMessagesToChannel, setMessageRemoteStatus, updateMessagesInChannel};
