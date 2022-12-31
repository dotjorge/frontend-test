import "../globalstyles.css";
import type { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <html lang="pt-br" />
        <title>A Fazenda - R7</title>
        <meta property="og:title" content="A Fazenda - R7" key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
