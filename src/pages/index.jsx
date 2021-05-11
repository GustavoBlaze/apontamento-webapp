import React from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';

import { withSSRAuth } from '@utils/withSSRAuth';
import NewEntryPointForm from '@components/layouts/NewEntryPointForm';
import PageContainer from '@components/core/PageContainer';
import EntryPointList from '@components/layouts/EntryPointList';

import prisma from '@lib/prisma';
import api from '@lib/api';
import groupBy from 'lodash/groupBy';
import { format } from 'date-fns';

export const getServerSideProps = withSSRAuth(async ({ user }) => {
  const entryPoints = await prisma.entryPoint.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      action: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const groupedByDayEntryPoints = groupBy(entryPoints, ({ createdAt }) =>
    format(createdAt, 'dd/MM/yyyy'),
  );

  const arrayOfGroupedEntries = Object.keys(groupedByDayEntryPoints).map(
    (key) => ({
      date: key,
      entries: [
        ...groupedByDayEntryPoints[key].map(({ createdAt, ...rest }) => ({
          ...rest,
          createdAt: JSON.stringify(createdAt).replace(/"/g, ''),
        })),
      ],
    }),
  );

  return {
    props: {
      user,
      entryPoints: arrayOfGroupedEntries,
    },
  };
});

const fetcher = async (...args) => {
  const { data } = await api.get(...args);

  return data;
};
export default function Home({ entryPoints }) {
  const { data } = useSWR('entrypoint', fetcher, { initialData: entryPoints });

  return (
    <PageContainer>
      <NewEntryPointForm />
      <EntryPointList entryPoints={data} />
    </PageContainer>
  );
}

Home.defaultProps = {
  entryPoints: [],
};

Home.propTypes = {
  entryPoints: PropTypes.arrayOf(PropTypes.object),
};
