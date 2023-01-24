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
        <title>Downey Tax Company | Professional Tax Services</title>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </TransitionLayout>
  );
}

MyApp.displayName = 'Downey Tax Company';

export default MyApp;