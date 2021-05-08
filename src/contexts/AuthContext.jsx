/* eslint-disable no-alert */
import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import jwt from 'jsonwebtoken';
import { setCookie, parseCookies } from 'nookies';
import api from '@lib/api';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!user?.email;

  useEffect(() => {
    const { 'apontamento.token': token } = parseCookies();

    if (token) {
      const { id, name, email } = jwt.decode(token);
      setUser({ id, name, email });
    }
  }, []);

  async function signIn({ email, password }) {
    try {
      const { data } = await api.post('session', { email, password });
      const { token } = data;
      const decoded = jwt.decode(token);

      setCookie(undefined, 'apontamento.token', token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });

      setUser({
        id: decoded?.id,
        name: decoded?.name,
        email: decoded?.email,
      });
    } catch (err) {
      alert(err?.response?.data || 'Não foi possível logar');
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.defaultProps = {
  children: undefined,
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
