import '@/styles/fonts.css';
import "@/styles/globals.css";
import { ReactLenis, useLenis } from 'lenis/react'
import Header from "@/components/layout/Header";

export default function App({ Component, pageProps }) {

  const lenis = useLenis(({ scroll }) => {
		// called every scroll
	})

  return (
    <>
      <ReactLenis root>
        <main className="main_wrap">
          <Header />
          <Component {...pageProps} />
        </main>
      </ReactLenis>
    </>
  );
}
