import React from 'react';

import { withSSRGuest } from '@utils/withSSRGuest';
import RegisterForm from '@components/layouts/RegisterForm';

export const getServerSideProps = withSSRGuest(async () => ({
  props: {},
}));

function Register() {
  return <RegisterForm />;
}

export default Register;
