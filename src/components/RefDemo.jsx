import { useRef } from "react";

const RefDemo = () => {

	const heading = useRef(null);
	const test = () => {
		heading.current.style.color = "yellow";
	}

	const input = useRef(null);
	const inVal = () => {
		console.log(input.current.name);
	}

	return (
		<>
			<div className="container pb-52">
				<h3 className="text-h2 font-medium text-gray_txt_01 flex items-center justify-center text-center flex-wrap" ref={heading}>
					Lorem ipsum...
				</h3>
				<input type="text" ref={input} name="username" className="text-black_dark_txt" />
				<div className="my-5 flex justify-center">
					<button className="flex justify-center items-center px-8 py-4 bg-green_bg rounded-[4px] text-h6" onClick={inVal}>
						Demo
					</button>
				</div>
			</div>
		</>
	)
}

export default RefDemo;