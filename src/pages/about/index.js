import Head from "next/head";
import HomeBanner from "@/components/layout/HomeBanner";
import ApiDemo from "@/components/ApiDemo";

export default function About() {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<meta discription="Create a Design" />
				<title>Aboutpage</title>
				<link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
			</Head>
			<HomeBanner />
			<ApiDemo />
		</>
	)
}