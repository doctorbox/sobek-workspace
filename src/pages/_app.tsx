import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SessionLayout from "@/components/layout/session";

export default function App({ Component, pageProps, router }: AppProps) {
  if (router.pathname.startsWith("/session"))
    return (
      <SessionLayout>
        <Component {...pageProps} />
      </SessionLayout>
    );

  return <Component {...pageProps} />;
}
