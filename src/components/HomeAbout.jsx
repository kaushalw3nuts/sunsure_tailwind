import Image from "next/image";
import PrimaryBtn from "./layout/PrimaryBtn";
import aboutShap from "@/assets/images/about-image.png";
import noteIcon from "@/assets/images/note-icon-orange.svg";
import multiUser from "@/assets/images/multi-user-icon.svg";

const HomeAbout = () => {

	const aboutCaption = [
		{
			aboutSubTitle: "ABOUT SUNSURE",
			aboutMainTitle: "Power your business green",
			aboutContent: "Sunsure simplifies your journey to renewable energy with customized Power Purchase Agreements (PPAs). We manage everything, from infrastructure setup to operations, delivering reliable clean energy as a service. You focus on your business, we power your future.",
			aboutURL: "#",
			aboutText: "Explore Our Solutions",
		},
	];

	const aboutCount = [
		{
			iconSrc: noteIcon,
			iconAlt: 'image',
			countNumber: '400', 
			textBlock: "Million USD Raised in Equity Capital",
		},
		{
			iconSrc: multiUser,
			iconAlt: 'image',
			countNumber: '70', 
			textBlock: 'Happy Industrial Customers',
		},
		{
			iconSrc: noteIcon,
			iconAlt: 'image',
			countNumber: '300', 
			textBlock: 'MW commissioned',
		},
	];

	return (
		<>
			<div className="home_about_sec w-full relative pt-36 pb-11">
				<div className="container">
					<div className="home_about_inner flex items-center w-full relative">
						<div className="home_about_left w-[340px]">
							{aboutCaption.map((aboutWrapper, index) => {
								const {aboutSubTitle, aboutMainTitle, aboutContent, aboutURL, aboutText} = aboutWrapper;
								return (
									<div className="section_title w-full relative" key={index}>
										<div className="sub_title pl-6 mb-4 relative w-full after:[''] after:absolute after:left-0 after:top-1 after:h-[14px] after:w-[18px] after:bg-[url('/about-title-icon.svg')] after:bg-center after:bg-no-repeat after:bg-contain">
											<span className="text-[18px] font-semibold leading-[155.556%] tracking-[0.54px] uppercase text-gray_txt_01">{aboutSubTitle}</span>
										</div>
										<h2 className="mb-6 text-h2 text-white_txt font-medium">{aboutMainTitle}</h2>
										<p className="text-white_txt font-normal text-p">{aboutContent}</p>
										<PrimaryBtn redirectLink={aboutURL} btnTxt={aboutText} />
									</div>
								)
							})}
						</div>
						<div className="home_about_center text-center px-[30px]">
							<Image src={aboutShap} alt="image" width={474} height={435} className="mx-auto w-auto h-auto max-w-full" />
						</div>
						<div className="home_about_right w-[292px]">
							<div className="about_count_wrp w-full relative">
								{aboutCount.map((abouCountWrap, index) => {
									const {iconSrc, iconAlt, countNumber, textBlock} = abouCountWrap;
									return (
										<div className="about_count_box w-full relative" key={index}>
											<div className="about_count_top w-full relative flex items-center pb-3">
												<div className="about_count_icon w-[47px] h-[42px] flex items-center">
													<Image src={iconSrc} alt={iconAlt} width={42} height={40} className="w-auto h-auto max-w-full" />
												</div>
												<div className="about_count_number pl-4 text-[42px] font-normal leading-[114.286%] text-white_txt">
													<span className="inline-flex">{countNumber}</span>+
												</div>
											</div>
											<p className="text-white_txt font-normal text-p">{textBlock}</p>
										</div>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeAbout;