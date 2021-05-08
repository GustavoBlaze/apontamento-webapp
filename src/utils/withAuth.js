import { promisify } from 'util';
import jwt from 'jsonwebtoken';

export function withAuth(callback) {
  return async (req, res) => {
    const authorization =
      req?.headers?.authorization || req?.headers?.Authorization || '';

    const token = authorization.split(' ').pop();

    if (!token) {
      return res.status(401).send('Token inválido');
    }

    try {
      const decoded = await promisify(jwt.verify)(
        token,
        process.env.JWT_SECRET,
      );

      const user = {
        id: decoded.id,
        name: decoded.name,
        email: decoded.email,
      };

      return await callback({ ...req, user }, res);
    } catch (err) {
      return res.status(401).send('Token inválido');
    }
  };
}
