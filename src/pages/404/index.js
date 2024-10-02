import Head from "next/head";
import Error from "@/components/layout/Error";


export default function Errorpage () {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<meta discription="Create a Design" />
				<title>404</title>
				<link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
			</Head>
			<Error />
		</>
	)
}