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

  	return (
		<>
			<footer className="footer w-full bg-black relative z-[2] flex">
				<div className="container">
					<div className="footer_top w-full relative bg-center bg-no-repeat bg-cover min-h-[364px] py-[100px] px-[106px] flex items-center z-[2] -mt-44">
						<div className="footer_top_left">
							<span>Power your growth, sustainably.</span>
						</div>
						<div className="footer_top_right">
							<p>We help you from conceptualizing your solar investment to commissioning of the asset and its operations over the complete lifetime - all from under one roof!</p>
							<PrimaryBtn redirectLink="#" btnTxt="Contact Us" />
						</div>
					</div>
					<div className="footer_bottom">
						<div className="footer_bottom_top">
							<div class="f_top_left">
								<div class="f_logo">
									<Link href="/">
										<Image src={redLogo} alt="logo" width={230} height={52} />
									</Link>
								</div>
							</div>
							<div className="f_top_right">
								<div className="f_cnt_box">
									<div>
										<Link href="tel:+91124-6928499">+91124-6928499</Link>
										<Link href="mailto:marketing@sunsure.in">marketing@sunsure.in</Link>
									</div>
								</div>
								<div className="f_social_wrap">
									<ul className="f_social">
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
						<div className="footer_bottom_bottom">
							<div className="footer_bottom_bottom_left">
								<div className="footer_bottom_bottom_left_box">
									<p>11th Floor, BPTP Park Centra, Opposite 32nd Milestone, Jal Vayu Vihar, Sector 30, Gurugram, Haryana - 122001</p>
								</div>
							</div>
							<div className="footer_bottom_bottom_right">
								<div className="f_more_links_row">
									<ul class="f_menu f_menu_1">
										
									</ul>
									<ul class="f_menu f_menu_2">

									</ul>
									<ul class="f_menu f_menu_3">

									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="footer_copy">
						<div className="footer_copy_tac">© Sunsure Energy. All rights Reserved.</div>
						<div className="footer_designby">
							Design By <Link href="#">Multia</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
  	)
}

export default Footer;