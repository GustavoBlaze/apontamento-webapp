import prisma from '@lib/prisma';

export default async (req, res) => {
  if (req.method !== 'POST') return res.status(400).send('bad request');

  const { name, email, password } = req.body;

  const existentUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existentUser) {
    return res.status(401).send('user already exists');
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  delete user.password;

  res.status(200).json({ user });
};
