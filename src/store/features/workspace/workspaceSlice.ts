import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IGuest} from "@/types/types";
import {INickNamePayload} from "@/store/features/workspace/payloadTypes";
import {createGuest} from "@/app/lib/util";

export interface WorkspaceState {
  /**
   * is left nav drawer open in Dashboard layout
   */
  isDrawerOpen: boolean;
  /**
   * user who signed in as a guest.
   */
  guest: IGuest | null
}

const initialState: WorkspaceState = {
  isDrawerOpen: true,
  guest: null
}

export const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    setIsDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload;
    },
    setGuestNickName: (state, action: PayloadAction<INickNamePayload>) => {
      state.guest = createGuest(action.payload.nickname);
    },
  }
});

export const {
  setIsDrawerOpen,
  setGuestNickName
} = workspaceSlice.actions;

export default workspaceSlice.reducer;
