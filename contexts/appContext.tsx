import { useFocusEffect } from "@react-navigation/native";
import React, { Dispatch, SetStateAction, useState } from "react";
import { createContext } from "react";

interface AppContext {
  serverConfig: [string, React.Dispatch<React.SetStateAction<string>>]; // Dev test only
  isServerOnline: boolean;
}

export const AppContext = createContext<AppContext>({
  serverConfig: ["", () => {}],
  isServerOnline: false,
});

const AppContextProvider = ({ children }: { children: any }) => {
  const [server, setServer] = useState<string>("");

  const value: AppContext = {
    serverConfig: [server, setServer],
    isServerOnline: server != "",
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
