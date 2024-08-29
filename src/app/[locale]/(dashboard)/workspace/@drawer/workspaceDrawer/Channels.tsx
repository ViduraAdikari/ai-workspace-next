"use client";

import React, {FC, PropsWithChildren, useEffect} from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ItemList, {DrawerItem} from "@/components/Lists/ItemList";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {setChannels, setSelectedChannel} from "@/store/features/workspace/workspaceSlice";

type ChannelListProps = {
  remoteChannels: IChannel[] | null
}

const Channels: FC<ChannelListProps> = (props: PropsWithChildren<ChannelListProps>) => {
  const {remoteChannels} = props;

  const channels: IChannel[] | null = useAppSelector(state => state.workspace.channels);
  const selectedChannel: IChannel | undefined = channels ?
    channels.find((channel: IChannel) => channel.isSelected) : undefined;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!remoteChannels) {
      return;
    }
    dispatch(setChannels({channels: remoteChannels}));
  }, [remoteChannels]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!channels) {
    return (
      <Typography>
        No channel list or channel is not loaded.
      </Typography>
    )
  }

  const handleOnChannelClicked = (channelID: string) => {
    dispatch(setSelectedChannel({id: channelID}));
  }

  const drawerNavItems: DrawerItem[] | null =
    channels.map((channel: IChannel) => ({key: channel.id, label: channel.name}));

  return (
    <Box sx={{}}>
      <ItemList itemListTitle="Channels:"
                drawerItems={drawerNavItems}
                selectedItemKey={selectedChannel?.id}
                onItemClicked={handleOnChannelClicked}/>
      <Divider/>
    </Box>
  )
};

export default Channels;
