import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Bannerimg1 from "@/assets/images/banner1.webp";
import Bannerimg2 from "@/assets/images/banner2-scaled-1sdfsdf.webp";
import Bannerimg3 from "@/assets/images/bannner3.webp";
import bannerPaten from "@/assets/images/banner-paten.svg";
import PrimaryBtn from "./PrimaryBtn";
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';

const HomeBanner = () => {

	const swiperwrap = [
        {
			imgsrc: Bannerimg1,
			imgalt: 'image',
        },
        {
			imgsrc: Bannerimg2,
			imgalt: 'image',
        },
        {
			imgsrc: Bannerimg3,
			imgalt: 'image',
        },
	];

	const swiperImageRef = useRef();
	const swiperTextRef = useRef();
	
	const swiperContentwrap = [
		{
			h1Text: 'India’s preferred renewable energy solutions provider',
			pText: 'Developing renewable energy assets, Powering India’s growth',
			url: '#',
			btnTextWrap: 'Explore Our Solutions',
		},
		{
			h1Text: 'Power your business green',
			pText: 'Developing renewable energy assets, Powering India’s growth',
			url: '#',
			btnTextWrap: 'Explore Our Solutions',
		},
		{
			h1Text: 'Power your business green',
			pText: 'Developing renewable energy assets, Powering India’s growth',
			url: '#',
			btnTextWrap: 'Explore Our Solutions',
		},
	];

	return (
		<>
			<div className="home_banner_wapper relative min-h-screen -ml-5 flex items-end justify-center">
				<div className="banner_image_slider absolute top-0 left-0 w-full h-full z-[1] flex overflow-hidden">
					<Swiper className="home_banner_slider"
					loop={true}
					slidesPerView={1}
					effect={'fade'}
					modules={[EffectFade, Autoplay]}
					fadeEffect={{ crossFade: true }}
					speed={1000}
					allowTouchMove={false} 
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					onBeforeInit={(swiper) => {
						swiperImageRef.current = swiper;
					}}>
						{swiperwrap.map((swiperwrapper, index) => {
							const {imgsrc, imgalt} = swiperwrapper;
							return (
								<SwiperSlide key={index}>
									<div className="banner_image w-full h-full overflow-hidden before:[''] before:absolute before:top-0 before:left-0 before:z-[2] before:w-full before:h-full before:bg-rgba_bg_01 after:[''] after:absolute after:top-0 after:left-0 after:z-[2] after:w-full after:h-full after:bg-gradient-linear">
										<Image src={imgsrc} alt={imgalt} width={1920} height={764} className="w-full h-full object-cover" />
									</div>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
				<div className="banner_image_patten absolute top-0 left-0 w-full h-full z-[1] flex pr-[122px] justify-end">
					<Image src={bannerPaten} alt="patten" width={572} height={764} className="w-auto h-full object-contain" />
				</div>
				<div className="home_banner_inner relative w-full z-[3]">
					<div className="container">
						<Swiper className="home_banner_txt_slider"
						loop={true}
						slidesPerView={1}
						effect={'fade'}
						allowTouchMove={false} 
						fadeEffect={{ crossFade: true }}
						modules={[EffectFade, Autoplay]}
						speed={1000}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						onBeforeInit={(swiper) => {
							swiperTextRef.current = swiper;
						}}>
							{swiperContentwrap.map((swipTxt, txtindex) => {
								const {h1Text, pText, url, btnTextWrap} = swipTxt;
								return (
									<SwiperSlide key={txtindex}>
										<div className="home_banner_txt pt-[180px] pb-20 max-w-[900px]">
											<h1 className="text-white_txt pb-6 text-h1 font-medium">{h1Text}</h1>
											<p className="text-[21px] font-normal leading-[133.333%] text-white_txt">{pText}</p>
											<PrimaryBtn redirectLink={url} btnTxt={btnTextWrap} />
										</div>
									</SwiperSlide>
								)
							})}
						</Swiper>
					</div>
				</div>
				<div className="switer_btn absolute bottom-20 right-[92px] z-[5] flex items-center">
					<button onClick={() => {swiperImageRef.current?.slidePrev(); swiperTextRef.current?.slidePrev();}} className="group">
						<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="26" cy="26" r="25.5" transform="rotate(-180 26 26)" fill="white" fillOpacity="0.3" stroke="white"></circle>
							<path d="M27.4167 21L22 26L27.4167 31" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
						</svg>
					</button>
					<button onClick={() => {swiperImageRef.current?.slideNext(); swiperTextRef.current?.slideNext();}} className="group">
						<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="26" cy="26" r="25.5" transform="rotate(-180 26 26)" fill="white" fillOpacity="0.3" stroke="white"></circle>
							<path d="M24.5833 21L30 26L24.5833 31" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
						</svg>
					</button>
				</div>
			</div>
		</>
	)
}

export default HomeBanner;