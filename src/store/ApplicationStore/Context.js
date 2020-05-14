import { createContext } from "react";

const ApplicationStore = createContext({});
export const ApplicationStoreProvider = ApplicationStore.Provider;
export const ApplicationStoreConsumer = ApplicationStore.Consumer;
