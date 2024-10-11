import { createContext, useState } from "react";

export const UserContext = createContext(null);
export const UserDispatchContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Guest', isLoggedInUser: false });

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};
