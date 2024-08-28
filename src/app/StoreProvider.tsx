"use client";

import React, {useRef} from "react";
import {AppStore, makeStore} from "@/store/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

export default function StoreProvider({children}: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore["store"]>();
  const persistorRef = useRef<AppStore["persistor"]>();
  if (!storeRef.current || !persistorRef.current) {
    const {store, persistor} = makeStore();
    storeRef.current = store;
    persistorRef.current = persistor;
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistorRef.current}>
        {children}
      </PersistGate>
    </Provider>
  )
}
