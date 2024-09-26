import { useContext } from "react";
import { createContext } from "react";

export const AppContext = createContext(undefined);

export function useUserContext() {
  const { user, setUser } = useContext(AppContext);

  if (user == undefined || setUser == undefined) {
    throw new Error("Component out of context");
  } else {
    return { user, setUser };
  }
}
