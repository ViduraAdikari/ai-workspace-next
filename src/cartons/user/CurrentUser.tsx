"use client";

import React from "react";
import Stack from "@mui/material/Stack";
import {Typography} from "@mui/material";
import {IGuest} from "@/types/types";
import {useAppSelector} from "@/store/hooks";
import Avatar from "@/components/Avatar";
import NameLabel from "@/components/Labels";

const CurrentUser: React.FC = () => {
  const guest: IGuest | null = useAppSelector(state => state.workspace.guest);

  if (!guest) {
    return <React.Fragment/>;
  }

  return (
    <Stack sx={{my: 3}} spacing={1}>
      <Typography variant="overline">Current user (you):</Typography>

      <Stack direction="row" spacing={2}>
        {guest.avatar && <Avatar avatarIcon={guest.avatar}/>}
        <NameLabel text={guest.nickname}/>
      </Stack>

    </Stack>
  )
};

export default CurrentUser;
