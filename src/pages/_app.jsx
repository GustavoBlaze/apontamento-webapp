/* eslint-disable react/prop-types */
import { GlobalStyle } from '@styles/GlobalStyle';
import { AuthProvider } from '@contexts/AuthContext';

function MyApp({ Component, pageProps }) {
  const { user } = pageProps;

  return (
    <>
      <GlobalStyle />
      <AuthProvider defaultUser={user || null}>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
