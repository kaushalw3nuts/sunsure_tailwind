import Image from "next/image";
import LogoImg1 from "@/assets/images/inox-air-logo.png";

const MakingSection = () => {

	const LogoTypes = [
		{
			logosrc: LogoImg1,
			logoalt: "logo",
		},
	];
	return (
		<>
			<div className="home_making_power_sec w-full relative pt-11 pb-[150px]">
				<div className="container">
					<div className="home_making_power_inner w-full relative">
						<h2 className="text-h1 font-medium text-gray_txt_01 flex items-center justify-center text-center flex-wrap">
							Making
							<span className="flex items-center justify-center pt-5 h-[85px] w-[260px] relative mr-3 ml-8">
								{LogoTypes.map((logowrapper, index) => {
									const {logosrc, logoalt} = logowrapper;
									return (
										<div className="logo_box_wrp absolute top-0 left-0 w-full h-full flex flex-wrap items-center justify-center pt-5 transition-all duration-300 ease-in-out" key={index}>
											<Image src={logosrc} alt={logoalt} width={100} height={85} className="w-full h-auto max-w-full max-h-full" />
										</div>
									)
								})}
							</span>	
							&apos;s power move.
						</h2>
					</div>
				</div>
			</div>
		</>
	)
}

export default MakingSection;