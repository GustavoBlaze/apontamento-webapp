/* eslint-disable react/prop-types */
import { GlobalStyle } from '@styles/GlobalStyle';
import { AuthProvider } from '@contexts/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
