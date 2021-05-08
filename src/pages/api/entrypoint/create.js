import * as Yup from 'yup';

import { withAuth } from '@utils/withAuth';
import prisma from '@lib/prisma';

const allowedActions = ['ENTRADA', 'SAIDA_ALMOCO', 'VOLTA_ALMOCO', 'SAIDA'];

const schema = Yup.object().shape({
  action: Yup.mixed().oneOf(allowedActions),
});

async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(400).send('Verifique seus dados');

  const { body: data, user } = req;

  if (!(await schema.isValid(data))) {
    return res.status(400).send('Verifique seus dados');
  }

  const entryPoint = await prisma.entryPoint.create({
    data: {
      ...data,
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  return res.json(entryPoint);
}

export default withAuth(handler);
