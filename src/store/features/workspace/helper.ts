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

export {updateSelectedChannel, addMessagesToChannel};
