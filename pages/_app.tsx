import { Fragment } from "react";
import Head from "next/head";
// import type { AppProps } from "next/app";
import "./global.css";
import MainPage from ".";

function MyApp() {
  return (
    <Fragment>
      <Head>
        <title>Character-Creation</title>
      </Head>
      <MainPage />
      {/* <Component {...pageProps} /> */}
    </Fragment>
  );
}

export default MyApp;
