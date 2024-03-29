
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

import "@/styles/globals.css";

import "@fontsource/poppins";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
