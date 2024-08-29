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

export {updateSelectedChannel};
