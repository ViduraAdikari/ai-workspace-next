import React, {FC, PropsWithChildren} from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {useTranslations} from "next-intl";

type ChannelToolbarProps = {
    channelName?: string
}

const ChannelToolbar: FC<ChannelToolbarProps> = (props: PropsWithChildren<ChannelToolbarProps>) => {
    const t = useTranslations("Workspace.Messages");

    const {channelName} = props;

    return (
      <Toolbar sx={{
          bgcolor: theme => theme.palette.secondary.dark
      }}>
          <Typography variant="h5" sx={{
              color: theme => theme.palette.common.white,
          }}>
              {channelName ? channelName : t("noChannelSelected")}
          </Typography>
      </Toolbar>
    )
};

export default ChannelToolbar;
