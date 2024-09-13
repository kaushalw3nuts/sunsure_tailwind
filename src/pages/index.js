import Head from "next/head";
import HomeBanner from "@/components/layout/HomeBanner";
import HomeAbout from "@/components/HomeAbout";


export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Homepage</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <HomeBanner />
      <HomeAbout />
    </>
  );
}
