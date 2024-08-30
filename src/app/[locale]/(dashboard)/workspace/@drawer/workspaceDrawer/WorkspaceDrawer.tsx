import React, {FC} from "react";
import Stack from "@mui/material/Stack";
import Channels from "@/app/[locale]/(dashboard)/workspace/@drawer/workspaceDrawer/Channels";
import CurrentUser from "@/cartons/user/CurrentUser";
import Box from "@mui/material/Box";
import {getSSRApolloClient} from "@/app/lib/getSSRApolloClient";
import {GET_CHANNELS} from "@/app/[locale]/(dashboard)/workspace/@drawer/workspaceDrawer/graphql/queries/getChannels";
import {getTranslations} from "next-intl/server";
import Feedback from "@/components/Feedback";

const WorkspaceDrawer: FC = async () => {
  const t = await getTranslations("Workspace.User");

  const client = await getSSRApolloClient();
  const {error, data} = await client.query<{ channels: IChannel[] }>({query: GET_CHANNELS});

  const renderChannels = () => {
    if (error || !data) {
      return (
        <Stack direction="row" spacing={2} justifyContent="center" sx={{mt: 5}}>
          <Feedback color="error" text={error ? error.message : "no channels data received!"}/>
        </Stack>
      )
    }

    return <Channels remoteChannels={data.channels}/>
  }

  return (
    <Stack>
      {renderChannels()}

      <Box sx={{
        px: 3,
      }}>
        <CurrentUser title={t("currentUser")}/>
      </Box>
    </Stack>
  )
};

export default WorkspaceDrawer;
