import { withAuth } from '@utils/withAuth';
import prisma from '@lib/prisma';
import groupBy from 'lodash/groupBy';
import { format } from 'date-fns';

async function handler(req, res) {
  if (req.method !== 'GET') return res.status(400).send('Verifique seus dados');

  const { user } = req;

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

  return res.json(arrayOfGroupedEntries);
}

export default withAuth(handler);
