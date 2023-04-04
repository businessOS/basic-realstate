import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { ChakraProvider, ScaleFade } from "@chakra-ui/react";

import "../styles/global.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps, router }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  return (
    <>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
