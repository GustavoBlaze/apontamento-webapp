import React, { useContext } from 'react';

import { withSSRGuest } from '@utils/withSSRGuest';
import LoginForm from '@components/layouts/LoginForm';
import { AuthContext } from '@contexts/AuthContext';

export const getServerSideProps = withSSRGuest(async () => ({
  props: {},
}));

function Login() {
  const { isAuthenticated } = useContext(AuthContext);

  console.log({ isAuthenticated });
  return <LoginForm />;
}

export default Login;
