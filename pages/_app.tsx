/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
import '../styles/reset.css';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Next.js + TypeScript + Bootstrap</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
