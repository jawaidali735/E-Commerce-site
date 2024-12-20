"use client";

import { SessionProvider } from "next-auth/react";
import {Provider} from "react-redux"

import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function Page({ children }: { children: React.ReactNode }) {
    return (
       <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <SessionProvider>
            {children}
        </SessionProvider>
        </PersistGate>
       </Provider>
    );
}



