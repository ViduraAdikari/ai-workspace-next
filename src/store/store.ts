import {configureStore} from "@reduxjs/toolkit";
import workspaceReducer from "@/store/features/workspace/workspaceSlice";
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "workspaceRx",
  storage: storage,
};

export const makeStore = () => {
  const persistedReducer = persistReducer(persistConfig, workspaceReducer)

  const store = configureStore({
    reducer: {
      workspace: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    // devTools: false,
  });

  const persistor = persistStore(store);
  return {store, persistor};
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["store"]["getState"]>;
export type AppDispatch = AppStore["store"]["dispatch"];
