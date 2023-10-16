import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "https://camilasbrussi.com.br",
          siteName: "Camila Sbrussi",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
