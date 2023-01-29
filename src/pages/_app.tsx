import 'tailwindcss/tailwind.css';
import TransitionLayout from '../components/layout';
import '../styles/globals.css';

import * as React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: any) {
  return (
    <TransitionLayout>
      <Script
        id="show-banner"
        dangerouslySetInnerHTML={{
          __html: `
(function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
{(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
(t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
e.parentNode.insertBefore(t,e);})
(window,"https://widgetbe.com/agent",document,"widgetTracker");
window.widgetTracker("create", "WT-LLESCQKM");
window.widgetTracker("send", "pageview");
          `,
        }}
      />
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
