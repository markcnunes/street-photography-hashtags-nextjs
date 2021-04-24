import { ThemeProvider } from '@emotion/react';
import theme from 'assests/theme';
import GlobalStyles from 'assests/theme/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Share from 'components/Share';
import CookieBanner from 'components/CookieBanner/CookieBanner';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Share />
        <Footer />
        <CookieBanner />
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
