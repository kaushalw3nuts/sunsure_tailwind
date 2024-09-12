import Link from "next/link";
import Image from "next/image";
import whiteLogo from "@/assets/images/logo-white.svg";
import redLogo from "@/assets/images/logo.svg";
import linkdin from "@/assets/images/linkdin-icon.svg";
import instagram from "@/assets/images/instagram-icon.svg";
import twiter from "@/assets/images/twiter-icon.svg";
import facebook from "@/assets/images/facebook-icon.svg";
import PrimaryBtn from "./PrimaryBtn";
import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {

	const NavBar = [
		{
			hrefLink: "/about",
			navLink: "About",
		},
		{
			hrefLink: "/solution",
			navLink: "Solutions",
		},
		{
			hrefLink: "/project",
			navLink: "Projects",
		},
		{
			hrefLink: "/career",
			navLink: "Careers",
		},
		{
			hrefLink: "/knowledge",
			navLink: "Knowledge Hub",
		},
	];

	const SocialIcon = [
		{
			IcondirectLink: "#",
			IconLinkImg: linkdin,
			Iconalt: 'icon',
		},
		{
			IcondirectLink: "#",
			IconLinkImg: instagram,
			Iconalt: 'icon',
		},
		{
			IcondirectLink: "#",
			IconLinkImg: twiter,
			Iconalt: 'icon',
		},
		{
			IcondirectLink: "#",
			IconLinkImg: facebook,
			Iconalt: 'icon',
		},
	];

	const [menuBtn, setMenuBtn] = useState(false);
	const menuHandler = (e) => {
		e.preventDefault();
		setMenuBtn(!menuBtn);

		document.body.classList.toggle("open_nav");
	}

	const activeRoute = useRouter();

	return (
		<>
			<header className="header fixed top-0 left-0 z-[999] w-full py-6 transition-all duration-300 ease-in-out border-b border-solid border-rgbaWhite_bg">
				<div className="container">
					<div className="header_inner flex justify-between items-center w-full ">
						<div className="logo relative flex">
							<Link href="/" className="relative w-auto h-10 flex">
								<Image src={whiteLogo} alt="logo" width={178} height={40} className="defult_logo w-auto h-full transition-all duration-300 ease-in-out" />
								<Image src={redLogo} alt="logo" width={178} height={40} className="stiky_logo w-auto h-full transition-all duration-300 ease-in-out absolute top-0 left-0 opacity-0 invisible" />
							</Link>
						</div>
						<nav className="navigation_main flex items-center">
							<ul className="main-menu flex items-center -mx-4">
								{NavBar.map((navLinkBar, index) => {
									const {hrefLink, navLink} = navLinkBar;
									const isActive = activeRoute.pathname === hrefLink;
									return (
										<li className={`px-4 flex relative ${isActive ? 'active' : ''}`} key={index}>
											<Link href={hrefLink} className="text-p font-normal flex text-white_txt hover:text-orange_txt before:[''] before:absolute before:-top-[38px] before:left-0 before:right-0 before:h-[3px] before:bg-orange_bg before:opacity-0 before:invisible before:transition-all before:duration-300 before:ease-in-out hover:before:opacity-100 hover:before:visible">{navLink}</Link>
										</li>
									)
								})}
							</ul>
							<PrimaryBtn redirectLink="#" btnTxt="Contact Us" />
							<div className="f_social_wrap ml-auto hidden">
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
						</nav>
					</div>
					<Link href="#" className={`ham-menu-btn hidden relative w-[35px] h-6 ${menuBtn ? 'active' : ''}`} onClick={(e) => menuHandler(e)}>
						<span className="block w-full h-[3px] relative top-[10px] bg-white_bg before:[''] before:w-full before:h-[3px] before:bg-white_bg before:absolute before:left-0 before:-top-[10px] before:z-[1] after:[''] after:w-1/2 after:h-[3px] after:left-0 after:-bottom-[10px] after:bg-white_bg after:z-[1] after:absolute"></span>
					</Link>
				</div>
			</header>
		</>
	)
}

export default Header;