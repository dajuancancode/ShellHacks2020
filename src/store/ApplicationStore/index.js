import React, { useState } from "react";
import { ApplicationStoreProvider } from "./Context";
import ApplicationAPI from "../../API/ApplicationAPI";

const createState = (stateHook) => {
  return (initialValue) => {
    const [value, set] = stateHook(initialValue);
    return { value, set };
  };
};

export default ({ children }) => {
  const stateHook = createState(useState);

  const user = stateHook(null);
  const loading = stateHook(false);
  const error = stateHook("");

  const create = (payload) => {
    loading.set(true);
    error.set("");

    return ApplicationAPI.createApplication(payload)
      .then(() => {
        loading.set(false);
        return true;
      })
      .catch((err) => {
        loading.set(false);
        error.set(
          err.response
            ? err.response.data.message
            : "There was an error, please try again later"
        );
      });
  };

  const store = {
    user: user.value,
    loading: loading.value,
    error: error.value,
    create,
  };

  return (
    <ApplicationStoreProvider value={store}>
      {children}
    </ApplicationStoreProvider>
  );
};
