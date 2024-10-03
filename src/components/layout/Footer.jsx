import Link from "next/link";
import Image from "next/image";
import PrimaryBtn from "./PrimaryBtn";
import redLogo from "@/assets/images/logo.svg";
import Linkdin from "@/assets/images/linkdin-icon.svg";
import Instagram from "@/assets/images/instagram-icon.svg";
import Twiter from "@/assets/images/twiter-icon.svg";
import Facebook from "@/assets/images/facebook-icon.svg";


const Footer = () => {

	const SocialIcon = [
		{
			IcondirectLink: "#",
			IconLinkImg: Linkdin,
			Iconalt: 'icon',
		},
		{
			IcondirectLink: "#",
			IconLinkImg: Instagram,
			Iconalt: 'icon',
		},
		{
			IcondirectLink: "#",
			IconLinkImg: Twiter,
			Iconalt: 'icon',
		},
		{
			IcondirectLink: "#",
			IconLinkImg: Facebook,
			Iconalt: 'icon',
		},
	];

	const f_menu1 = [
		{
			hrefLink: "/about",
			navLink: "About",
		},
		{
			hrefLink: "/project",
			navLink: "Projects",
		},
		{
			hrefLink: "/career",
			navLink: "Careers",
		},
	];

	const f_menu2 = [
		{
			hrefLink: "/solution",
			navLink: "Solutions",
		},
		{
			hrefLink: "/knowledge",
			navLink: "Knowledge Hub",
		},
		{
			hrefLink: "/contact",
			navLink: "Contact us",
		},
	];

	const f_menu3 = [
		{
			hrefLink: "/faq",
			navLink: "FAQs",
		},
		{
			hrefLink: "/channel_partner_program",
			navLink: "Channel Partner Program",
		},
		{
			hrefLink: "/privacy_policy",
			navLink: "Privacy Policy",
		},
	];

  	return (
		<>
			<footer className="footer w-full bg-black relative z-[2] flex">
				<div className="container">
					<div className="footer_top w-full relative bg-center bg-no-repeat bg-cover min-h-[364px] py-[100px] px-[106px] flex items-center z-[2] -mt-44 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:-z-[1] after:bg-black_bg after:opacity-70">
						<div className="footer_top_left w-1/2 pr-[15px]">
							<span className="text-h2 text-white_txt font-medium">Power your growth, sustainably.</span>
						</div>
						<div className="footer_top_right w-1/2 pl-[15px]">
							<p className="text-white_txt font-normal text-p">We help you from conceptualizing your solar investment to commissioning of the asset and its operations over the complete lifetime - all from under one roof!</p>
							<PrimaryBtn redirectLink="#" btnTxt="Contact Us" />
						</div>
					</div>
					<div className="footer_bottom w-full relative pt-[100px]">
						<div className="footer_bottom_top flex flex-wrap w-full items-start">
							<div className="f_top_left w-1/2 flex pr-[15px]">
								<div className="f_logo pt-[6px]">
									<Link href="/" className="flex">
										<Image src={redLogo} alt="logo" width={230} height={52} className="w-[230px] h-auto" />
									</Link>
								</div>
							</div>
							<div className="f_top_right w-1/2 flex pl-[15px]">
								<div className="f_cnt_box pr-[15px]">
									<div className="text-h5 not-italic font-medium text-white_txt">
										<Link href="tel:+91124-6928499" className="transition-all duration-300 ease-in-out hover:text-orange_txt">+91124-6928499</Link>
										<br />
										<Link href="mailto:marketing@sunsure.in" className="transition-all duration-300 ease-in-out hover:text-orange_txt">marketing@sunsure.in</Link>
									</div>
								</div>
								<div className="f_social_wrap ml-auto">
									<ul className="f_social flex -mx-[5px] gap-y-[10px] pt-[6px]">
										{SocialIcon.map((socialLinkBar, index) => {
											const {IcondirectLink, IconLinkImg, Iconalt} = socialLinkBar;
											return (
												<li key={index} className="px-[5px]">
													<Link href={IcondirectLink} className="w-[52px] h-[52px] flex items-center justify-center bg-rgbaWhite_bg_01 border-[1px] border-solid border-white_bg rounded-[50%] hover:bg-orange_bg hover:border-orange_bg">
														<Image src={IconLinkImg} width={17} height={17} alt={Iconalt} className="h-[17px] w-auto" />
													</Link>
												</li>
											)
										})}
									</ul>
								</div>
							</div>
						</div>
						<div className="footer_bottom_bottom flex flex-wrap w-full items-start py-[60px]">
							<div className="footer_bottom_bottom_left w-1/2 flex pr-[15px]">
								<div className="footer_bottom_bottom_left_box max-w-[400px]">
									<p className="text-white_txt not-italic text-p">11th Floor, BPTP Park Centra, Opposite 32nd Milestone, Jal Vayu Vihar, Sector 30, Gurugram, Haryana - 122001</p>
								</div>
							</div>
							<div className="footer_bottom_bottom_right w-1/2 flex pl-[15px]">
								<div className="f_more_links_row w-full flex flex-wrap gap-y-5 justify-between">
									<ul className="f_menu f_menu_1 w-[28%] pr-[15px]">
										{f_menu1.map((fMenu1, index) => {
											const {hrefLink, navLink} = fMenu1;
											return (
												<li className="w-full relative" key={index}>
													<Link href={hrefLink} className="text-[18px] not-italic font-normal leading-[166.667%] text-gray_txt_01 inline-flex transition-all duration-300 ease-in-out hover:text-orange_txt">{navLink}</Link>
												</li>
											)
										})}
									</ul>
									<ul className="f_menu f_menu_2 w-[37%] pr-[15px]">
										{f_menu2.map((fMenu2, index) => {
											const {hrefLink, navLink} = fMenu2;
											return (
												<li className="w-full relative" key={index}>
													<Link href={hrefLink} className="text-[18px] not-italic font-normal leading-[166.667%] text-gray_txt_01 inline-flex transition-all duration-300 ease-in-out hover:text-orange_txt">{navLink}</Link>
												</li>
											)
										})}
									</ul>
									<ul className="f_menu f_menu_3">
										{f_menu3.map((fMenu3, index) => {
											const {hrefLink, navLink} = fMenu3;
											return (
												<li className="w-full relative" key={index}>
													<Link href={hrefLink} className="text-[18px] not-italic font-normal leading-[166.667%] text-gray_txt_01 inline-flex transition-all duration-300 ease-in-out hover:text-orange_txt">{navLink}</Link>
												</li>
											)
										})}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="footer_copy flex w-full border-t border-solid border-[#4B4B4B] pt-[15px] pb-[60px] justify-between">
						<div className="footer_copy_tac text-14 not-italic font-normal text-gray_txt_01">
							© Sunsure Energy. All rights Reserved.
						</div>
						<div className="footer_designby text-14 not-italic font-normal text-gray_txt_01">
							Design By <Link href="#" className="text-white_txt inline-flex transition-all duration-300 ease-in-out hover:text-orange_txt">Multia</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
  	)
}

export default Footer;