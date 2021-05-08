import prisma from '@lib/prisma';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export default async (req, res) => {
  if (req.method !== 'POST')
    return res.status(400).send('Verifique seus dados');

  const { email, password } = req.body;

  const authenticatedUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!authenticatedUser) {
    return res.status(401).send('Usuário não existe');
  }

  const passwordIsCorrect = await bcrypt.compare(
    password,
    authenticatedUser.password,
  );

  if (!passwordIsCorrect) {
    return res.status(401).send('Senha incorreta');
  }

  const { id, name } = authenticatedUser;

  const token = jwt.sign({ id, name, email }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24 * 3, // 3 dias
  });

  res.status(200).json({ token });
};
