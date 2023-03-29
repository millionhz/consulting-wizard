import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import userTypes from '../utils/userTypes';

function RoleAwareComponent({ client, consultant, admin }) {
  const { type } = useContext(UserContext);

  const defaultComponent = <Navigate to="/" />;

  if (type === userTypes.CLIENT) {
    return client ?? defaultComponent;
  }

  if (type === userTypes.CONSULTANT) {
    return consultant ?? defaultComponent;
  }

  if (type === userTypes.ADMIN) {
    return admin ?? defaultComponent;
  }
}

export default RoleAwareComponent;
