import Link from "next/link";

const PrimaryBtn = (props) => {
	return (
		<>
			<div className="menu_btn flex">
				<Link href={props.redirectLink} className="relative flex items-center justify-center text-center pt-[2px] pr-4 pl-10 text-white_txt text-[18px] font-semibold leading-[133.333%] tracking-[0.18px] min-h-[52px] bg-orange_bg rounded-[50px] hover:pr-10 hover:pl-4 after:[''] after:absolute after:left-[20px] after:top-2/4 after:-translate-y-1/2 after:w-[10px] after:h-[10px] after:rounded-[50%] after:bg-white_bg after:transition-all after:duration-300 after:ease-in-out">{props.btnTxt}</Link>
			</div>
		</>
	)
}

export default PrimaryBtn;