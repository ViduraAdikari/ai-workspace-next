import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  INickNamePayload,
  ISelectedChannelPayload,
  ISetChannelsPayload, ISetMessagesPayload,
  ISetNewMessagePayload
} from "@/store/features/workspace/payloadTypes";
import {createGuest} from "@/app/lib/util";
import {
  addMessagesToChannel,
  setMessageRemoteStatus,
  updateMessagesInChannel,
  updateSelectedChannel
} from "@/store/features/workspace/helper";
import {WorkspaceState} from "@/store/features/workspace/workspaceReducerTypes";

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
    setNewMessage: (state, action: PayloadAction<ISetNewMessagePayload>) => {
      if (!state.channels) {
        return;
      }

      state.channels = addMessagesToChannel(state.channels.slice(), action.payload.channelID, action.payload.message);
    },
    updateMessageRemoteStatus: (state, action: PayloadAction<ISetNewMessagePayload>) => {
      if (!state.channels) {
        return;
      }

      state.channels = setMessageRemoteStatus(state.channels.slice(), action.payload.channelID, action.payload.message);
    },
    setMessages: (state, action: PayloadAction<ISetMessagesPayload>) => {
      if (!state.channels) {
        return;
      }

      state.channels = updateMessagesInChannel(state.channels.slice(), action.payload.channelID,
        action.payload.messages);
    },
  }
});

export const {
  setIsDrawerOpen,
  setGuestNickName,
  setChannels,
  setSelectedChannel,
  setNewMessage,
  updateMessageRemoteStatus,
  setMessages,
} = workspaceSlice.actions;

export default workspaceSlice.reducer;
