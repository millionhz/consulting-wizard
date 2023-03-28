import { createContext, useEffect, useMemo, useState } from 'react';
import { authenticate } from '../api/backend';
import BaseRouter from '../router/BaseRouter';
import LoggedOutRouter from '../router/LoggedOutRouter';
import ClientRouter from '../router/ClientRouter';
import ConsultantRouter from '../router/ConsultantRouter';
import AdminRouter from '../router/AdminRouter';
import userTypes from '../utils/userTypes';

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [userObj, setUserObj] = useState({
    isAuthenticated: null,
  });
  const [router, setRouter] = useState(BaseRouter);

  useEffect(() => {
    authenticate()
      .then(({ data }) => {
        setUserObj({ ...data, isAuthenticated: true });
      })
      .catch(() => {
        setUserObj({ isAuthenticated: false });
      });
  }, []);

  useEffect(() => {
    const { isAuthenticated, type } = userObj;

    if (isAuthenticated === null) {
      return setRouter(BaseRouter);
    }

    if (isAuthenticated === false) {
      return setRouter(LoggedOutRouter);
    }

    if (type === userTypes.CLIENT) {
      return setRouter(ClientRouter);
    }

    if (type === userTypes.CONSULTANT) {
      return setRouter(ConsultantRouter);
    }

    if (type === userTypes.ADMIN) {
      return setRouter(AdminRouter);
    }
  }, [userObj]);

  const value = useMemo(() => ({ ...userObj, router }), [userObj, router]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
