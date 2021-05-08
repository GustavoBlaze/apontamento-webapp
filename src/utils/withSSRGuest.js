import { parseCookies } from 'nookies';

export function withSSRGuest(callback) {
  return async (ctx) => {
    const cookies = parseCookies(ctx);

    if (cookies['apontamento.token']) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    return await callback(ctx);
  };
}
