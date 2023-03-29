import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import userTypes from '../utils/userTypes';

function RoleAwareComponent({ client, consultant, admin }) {
  const { type } = useContext(UserContext);

  if (type === userTypes.CLIENT) {
    return client;
  }

  if (type === userTypes.CONSULTANT) {
    return consultant;
  }

  if (type === userTypes.ADMIN) {
    return admin;
  }
}

export default RoleAwareComponent;
