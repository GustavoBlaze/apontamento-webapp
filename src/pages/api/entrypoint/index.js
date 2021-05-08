import { withAuth } from '@utils/withAuth';
import prisma from '@lib/prisma';

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

  return res.json(entryPoints);
}

export default withAuth(handler);
