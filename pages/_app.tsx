import "../globalstyles.css";
import { Montserrat } from "@next/font/google";
import type { AppProps } from "next/app";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
