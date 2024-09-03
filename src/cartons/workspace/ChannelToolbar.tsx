import React, {FC, PropsWithChildren} from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {useTranslations} from "next-intl";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

type ChannelToolbarProps = {
  channelName?: string
  errorFetching: boolean
}

const ChannelToolbar: FC<ChannelToolbarProps> = (props: PropsWithChildren<ChannelToolbarProps>) => {
  const t = useTranslations("Workspace.Messages");

  const {channelName, errorFetching} = props;

  const renderFetchingError = () => {
    if (!errorFetching) {
      return;
    }

    return (
      <Typography variant="caption" sx={{
        ml: 1,
        color: theme => theme.palette.warning.main,
      }}
                  display="flex" alignItems="center">
        {" "}(
        <WarningAmberIcon sx={{fontSize: 12, mr: .5}}/>
        {t("errorFetching")})
      </Typography>
    )
  }

  return (
    <Toolbar sx={{
      // bgcolor: theme => theme.palette.secondary.dark
      bgcolor: theme => theme.palette.primary.dark
    }}>
      <Typography variant="h5" sx={{
        color: theme => theme.palette.common.white,
      }}>
        {channelName ? channelName : t("noChannelSelected")}
      </Typography>
      {renderFetchingError()}
    </Toolbar>
  )
};

export default ChannelToolbar;
