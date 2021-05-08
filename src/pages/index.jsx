import React from 'react';

import { withSSRAuth } from '@utils/withSSRAuth';
import NewEntryPointForm from '@components/layouts/NewEntryPointForm';
import PageContainer from '@components/core/PageContainer';

export const getServerSideProps = withSSRAuth(async ({ user }) => ({
  props: {
    user,
  },
}));

export default function Home() {
  return (
    <PageContainer>
      <NewEntryPointForm />
    </PageContainer>
  );
}
