import { createContext, useMemo, useState } from 'react';
import { getToken } from '../api/firebaseAuth';

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [userObj, setUserObj] = useState(null);

  const logIn = (email, password) =>
    getToken(email, password).then(({ user: { accessToken } }) => {
      setUserObj({ accessToken });
      return accessToken;
    });

  const value = useMemo(() => ({ logIn, ...userObj }), [userObj]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
