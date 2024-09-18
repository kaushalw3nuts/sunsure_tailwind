import { useState } from "react";

const StateDemo = () => {

	const [demo, setDemo] = useState(false);

	const demoWrap = () => {
		setDemo(!demo);
	}

	return (
		<>
			<div className="container pb-10">
				<h1 className="text-h1 font-medium text-gray_txt_01 flex items-center justify-center text-center flex-wrap" style={{color: demo ? 'gray' : 'blue'}}>
					Making power move.
				</h1>
				{demo && <p className="text-white_txt font-normal text-p text-center mt-6">Lorem ipsum dolor</p>}
				<div className="flex justify-center">
					<button className="flex items-center justify-center mt-6 text-h5 bg-orange_bg py-4 px-10 rounded-lg" onClick={demoWrap}>{demo ? 'hide' : 'show'}</button>
				</div>
			</div>
		</>
	)
}

export default StateDemo;