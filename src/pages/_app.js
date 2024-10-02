import '@/styles/fonts.css';
import "@/styles/globals.css";
import { ReactLenis, useLenis } from 'lenis/react'
import Header from "@/components/layout/Header";
import Footer from '@/components/layout/Footer';
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {

  const lenis = useLenis(({ scroll }) => {
		// called every scroll
	})

  const route = useRouter();
  const is404Page = route.isFallback || route.pathname == '/404';

  return (
    <>
      <ReactLenis root>
        <main className="main_wrap">
          { !is404Page && <Header /> }
          <Component {...pageProps} />
          { !is404Page && <Footer /> }
        </main>
      </ReactLenis>
    </>
  );
}
