import 'tailwindcss/tailwind.css';
import TransitionLayout from '../components/layout';
import '../styles/globals.css';
import { useState } from 'react';
import Script from 'next/script';
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
  const value = { language, setLanguage };
  return (
    <TransitionLayout>
      <Head>
        <title>Yesenia Diaz | Realtor</title>
      </Head>
      <Script
                id="fubScript"
                strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.fub=fub.heap||[],
            fub.load = 
            (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function() {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"), (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i; e.parentNode.insertBefore(t,e);}) (window,"https://widgetbe.com/agent",document,"widgetTracker"); window.widgetTracker("create", "WT-LLESCQKM"); window.widgetTracker("send", "pageview");
            `
          }}
        />
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
