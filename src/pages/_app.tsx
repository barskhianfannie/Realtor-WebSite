import 'tailwindcss/tailwind.css';
import TransitionLayout from '../components/layout';
import '../styles/globals.css';

import * as React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import Script from 'next/script';
//Front of the page
function MyApp({ Component, pageProps }: any) {
  return (
    <TransitionLayout>
      <Head>
        <title>Yesenia Diaz | Realtor</title>
      </Head>
      <div className="bg-white">
        <div className="relative mx-auto  w-5/6 lg:max-w-7xl">
          <Navbar />
          <Component {...pageProps} />
      <Footer />
      </div>
      </div>
    </TransitionLayout>
  );
}

MyApp.displayName = 'Yesenia Diaz Realtor';

export default MyApp;
