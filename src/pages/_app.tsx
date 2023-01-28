import "tailwindcss/tailwind.css";
import TransitionLayout from "../components/layout";
import '../styles/globals.css';

import * as React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Head from "next/head";


function MyApp({ Component, pageProps }:any) {
  return (
    <TransitionLayout>
      <Head>
        <title>Yesenia Diaz | Realtor</title>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </TransitionLayout>
  );
}

MyApp.displayName = 'Yesenia Diaz Realtor';

export default MyApp;