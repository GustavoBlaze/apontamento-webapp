import { promisify } from 'util';
import { parseCookies, destroyCookie } from 'nookies';
import jwt from 'jsonwebtoken';

export function withSSRAuth(callback) {
  return async (ctx) => {
    const cookies = parseCookies(ctx);
    const { 'apontamento.token': token } = cookies;

    if (!token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    let decoded;

    try {
      decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    } catch (err) {
      destroyCookie(ctx, 'apontamento.token');

      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    const user = {
      id: decoded.id,
      name: decoded.name,
      email: decoded.email,
    };

    return await callback({ ...ctx, user });
  };
}
