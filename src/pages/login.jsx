import React from 'react';

import { withSSRGuest } from '@utils/withSSRGuest';
import LoginForm from '@components/layouts/LoginForm';

export const getServerSideProps = withSSRGuest(async () => ({
  props: {},
}));

function Login() {
  return <LoginForm />;
}

export default Login;
