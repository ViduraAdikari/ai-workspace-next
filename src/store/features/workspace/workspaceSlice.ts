import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IGuest} from "@/types/types";
import {INickNamePayload, ISelectedChannelPayload, ISetChannelsPayload} from "@/store/features/workspace/payloadTypes";
import {createGuest} from "@/app/lib/util";
import {updateSelectedChannel} from "@/store/features/workspace/helper";

export interface WorkspaceState {
  /**
   * is left nav drawer open in Dashboard layout
   */
  isDrawerOpen: boolean;
  /**
   * user who signed in as a guest.
   */
  guest: IGuest | null
  /**
   * channels from the api
   */
  channels: IChannel[] | null
}

const initialState: WorkspaceState = {
  isDrawerOpen: true,
  guest: null,
  channels: null,
}

export const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    setIsDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload;
    },
    setGuestNickName: (state, action: PayloadAction<INickNamePayload>) => {
      state.guest = createGuest(action.payload.nickname);
    },
    setChannels: (state, action: PayloadAction<ISetChannelsPayload>) => {
      state.channels = action.payload.channels;
    },
    setSelectedChannel: (state, action: PayloadAction<ISelectedChannelPayload>) => {
      if (!state.channels) {
        return;
      }

      state.channels = updateSelectedChannel(action.payload.id, state.channels.slice());
    },
  }
});

export const {
  setIsDrawerOpen,
  setGuestNickName,
  setChannels,
  setSelectedChannel,
} = workspaceSlice.actions;

export default workspaceSlice.reducer;
