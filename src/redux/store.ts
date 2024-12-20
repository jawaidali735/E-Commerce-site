import { configureStore } from '@reduxjs/toolkit';
import proReducer from "./proSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import createWebStorage from 'redux-persist/es/storage/createWebStorage';


export function createPersistStore() {
    const isServer = typeof window === "undefined";
    if (isServer) {
        return {
            getItem: () => Promise.resolve(null),
            setItem: () => Promise.resolve(),
            removeItem: () => Promise.resolve(),
        };
    }
    return createWebStorage("local");
}

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createPersistStore();

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const persistedReducer = persistReducer(persistConfig, proReducer);

export const store = configureStore({
    reducer: {
        pro: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
