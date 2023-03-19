import { createContext, useEffect, useMemo, useState } from 'react';
import { getToken } from '../api/firebaseAuth';
import { getCookie, authenticate } from '../api/backend';

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [userObj, setUserObj] = useState({
    isAuthenticated: null,
  });

  const logIn = (email, password) =>
    getToken(email, password).then(({ user: { accessToken } }) => {
      console.log(accessToken);
      return getCookie(accessToken);
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

  const value = useMemo(() => ({ logIn, ...userObj }), [userObj]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
