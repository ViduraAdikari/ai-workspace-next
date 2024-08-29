import React, {FC} from "react";
import Stack from "@mui/material/Stack";
import Channels from "@/app/[locale]/(dashboard)/workspace/@drawer/workspaceDrawer/Channels";
import CurrentUser from "@/cartons/user/CurrentUser";
import Box from "@mui/material/Box";

const sampleChannels: IChannel[] = [
  {id: "1", name: "general"},
  {id: "2", name: "random"},
  {id: "3", name: "team"},
  {id: "4", name: "x-code"},
];

const WorkspaceDrawer: FC = () => {
  return (
    <Stack>
      <Channels remoteChannels={sampleChannels}/>

      <Box sx={{
        px: 3,
      }}>
        <CurrentUser/>
      </Box>
    </Stack>
  )
}

export default WorkspaceDrawer;
