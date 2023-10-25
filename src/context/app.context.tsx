"use client";
import { getProfileFromLS } from "@/utils/auth";
import { createContext, useState } from "react";

interface IAppcontext {
  setProfile: React.Dispatch<React.SetStateAction<IUser | null>>;
  profile: IUser | null;
}

const initialAppContext: IAppcontext = {
  setProfile: () => null,
  profile: getProfileFromLS(),
};

export const AppContext = createContext<IAppcontext>(initialAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState<IUser | null>(
    initialAppContext.profile
  );

  return (
    <AppContext.Provider
      value={{
        profile,
        setProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
