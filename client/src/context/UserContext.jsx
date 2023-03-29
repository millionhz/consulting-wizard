import { createContext, useEffect, useMemo, useState } from 'react';
import { authenticate as getAuthStatus } from '../api/backend';

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [userObj, setUserObj] = useState({
    isAuthenticated: null,
  });

  const authenticate = () =>
    getAuthStatus()
      .then(({ data }) => {
        setUserObj({ ...data, isAuthenticated: true });
      })
      .catch(() => {
        setUserObj({ isAuthenticated: false });
      });

  useEffect(() => {
    authenticate();
  }, []);

  const value = useMemo(() => ({ ...userObj, authenticate }), [userObj]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
