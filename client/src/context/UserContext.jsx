import { createContext, useEffect, useMemo, useState } from 'react';
import { authenticate } from '../api/backend';

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [userObj, setUserObj] = useState({
    isAuthenticated: null,
  });

  useEffect(() => {
    authenticate()
      .then(({ data }) => {
        console.log('userObj:', data);
        setUserObj({ ...data, isAuthenticated: true });
      })
      .catch(() => {
        setUserObj({ isAuthenticated: false });
      });
  }, []);

  const value = useMemo(() => ({ ...userObj }), [userObj]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
