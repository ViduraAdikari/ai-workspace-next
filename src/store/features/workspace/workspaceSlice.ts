import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface WorkspaceState {
  /**
   * is left nav drawer open in Dashboard layout
   */
  isDrawerOpen: boolean;
}

const initialState: WorkspaceState = {
  isDrawerOpen: true,
}

export const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    setIsDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload;
    },
  }
});

export const {
  setIsDrawerOpen,
} = workspaceSlice.actions;

export default workspaceSlice.reducer;
