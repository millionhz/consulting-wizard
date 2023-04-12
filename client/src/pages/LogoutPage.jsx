import { useEffect } from 'react';
import { logout } from '../api/backend';

function LogoutPage() {
  useEffect(() => {
    logout().then(() => {
      window.location.href = '/';
    });
  });
}

export default LogoutPage;
