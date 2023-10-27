"use client";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

interface IAppcontext {
  setProfile: React.Dispatch<React.SetStateAction<IUser | null>>;
  profile: IUser | null;
}

const initialAppContext: IAppcontext = {
  setProfile: () => null,
  profile: null,
};

export const AppContext = createContext<IAppcontext>(initialAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookies] = useCookies();

  const [profile, setProfile] = useState<IUser | null>(
    initialAppContext.profile
  );

  useEffect(() => {
    setProfile(cookies.user);
  }, [cookies.user]);

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
