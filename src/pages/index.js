import Head from "next/head";
import HomeBanner from "@/components/layout/HomeBanner";
import HomeAbout from "@/components/HomeAbout";
import MakingSection from "@/components/MakingSection";
import StateDemo from "@/components/StateDemo";
import RefDemo from "@/components/RefDemo";


export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta discription="Create a Design" />
        <title>Home</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <HomeBanner />
      <HomeAbout />
      <MakingSection />
      <StateDemo />
      <RefDemo />
    </>
  );
}
