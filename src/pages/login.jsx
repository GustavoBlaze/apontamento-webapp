import React, { useContext } from 'react';

import LoginForm from '@components/layouts/LoginForm';
import { AuthContext } from '@contexts/AuthContext';

function Login() {
  const { isAuthenticated } = useContext(AuthContext);

  console.log({ isAuthenticated });
  return <LoginForm />;
}

export default Login;
