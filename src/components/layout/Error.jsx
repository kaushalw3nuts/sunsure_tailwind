import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Error = () => {

	const routing = useRouter();
	useEffect(() => {
		setTimeout(() => {
			routing.push("/");
		}, 3000);
	}, []);
	
	return (
		<>
			<div className="section p-4 flex items-center justify-center w-full h-screen flex-col text-center">
				<h1 className="error text-[220px] text-green_txt_01 opacity-80">
					404
				</h1>
				<span className="w-full text-[60px] uppercase text-center pb-5 leading-[1.1923] text-[#bbbbbb] font-medium flex justify-center -mt-20 relative z-[1] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:w-[100px] after:border-solid after:border-2 after:border-white_bg">PAGE NOT FOUND</span>
				<div className="page my-8 text-[20px] font-semibold text-[#bea9a9]">
					We can&apos;t find the page you&apos;re looking for. If the problem persists please contact us.
				</div>
				<div className="back_btn flex justify-center">
					<Link className="back-home flex justify-center items-center border-solid border-2 border-white_bg text-white_txt uppercase font-semibold px-[50px] text-[18px] h-[58px] transition-all duration-300 ease-in-out bg-transparent relative overflow-hidden z-[2] after:content-[''] after:absolute after:left-0 after:bottom-auto after:top-0 after:bg-white_bg after:-z-[1] after:w-full after:h-0 after:transition-all after:duration-300 after:ease-in-out hover:text-black_txt hover:after:top-auto hover:after:bottom-0 hover:after:h-full" href="/">
						Back to home
					</Link>
				</div>
			</div>
		</>
	)
}

export default Error;