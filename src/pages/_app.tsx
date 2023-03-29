import "@/styles/index.scss";
import { Provider } from "jotai";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add(inter.className);
    return () => {
      document.body.classList.remove(inter.className);
    };
  }, []);

  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
