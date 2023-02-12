import 'tailwindcss/tailwind.css';
import TransitionLayout from '../components/layout';
import '../styles/globals.css';
import { useState } from 'react';
import { PageContext, PageContextProps } from '@utils/contexts';

import * as React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
//Front of the page
function MyApp({ Component, pageProps }: any) {
  const [language, setLanguage] = useState({
    language: 'English',
  } as PageContextProps);
  const value = { language, setLanguage};
  return (
    <TransitionLayout>
      <Head>
        <title>Yesenia Diaz | Realtor</title>
      </Head>
      <PageContext.Provider value={value}>
      <div className="bg-white">
        <div className="relative mx-auto  w-5/6 lg:max-w-7xl bg-white">
          <Navbar />
          <Component {...pageProps} />
      <Footer />
      </div>
      </div>
      </PageContext.Provider>
    </TransitionLayout>
  );
}

MyApp.displayName = 'Yesenia Diaz Realtor';

export default MyApp;
