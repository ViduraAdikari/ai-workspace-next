"use client";

import React, {FC} from "react";
import {useAppSelector} from "@/store/hooks";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const ChannelMessaging: FC = () => {
  const channels: IChannel[] | null = useAppSelector(state => state.workspace.channels);
  const selectedChannel: IChannel | undefined = channels ?
    channels.find((channel: IChannel) => channel.isSelected) : undefined;

  if (!selectedChannel) {
    return null;
  }

  return (
    <Stack>
      <Typography variant="h5" sx={{
        borderBottom: "1px solid",
        display: "inline",
      }}>
        {selectedChannel.name}
      </Typography>
    </Stack>
  )
}

export default ChannelMessaging;
