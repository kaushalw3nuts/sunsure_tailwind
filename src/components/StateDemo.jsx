import { useState } from "react";

const StateDemo = () => {

	const [demo, setDemo] = useState(false);
	const demoWrap = () => {
		setDemo(!demo);
	}

	const [value, setValue] = useState("");
	const valueChange = (e) => {
		setValue(e.target.value);
	}

	const [data, setData] = useState([]);
	const allDataList = () => {
		setData([...data, value]);
	}

	const [children, setChildren] = useState(['madhav', 'krish', 'arjun', 'karan', 'shikhar']);
	const deleteData = (index) => {
		const dubArray = [...children];
		dubArray.splice(index, 1);
		setChildren(dubArray);
	}

	return (
		<>
			<div className="container pb-10">
				<div>
					<h3 className="text-h1 font-medium text-gray_txt_01 flex items-center justify-center text-center flex-wrap" style={{color: demo ? 'gray' : 'blue'}}>
						Making power move.
					</h3>
					{demo && <p className="text-white_txt font-normal text-p text-center mt-6">Lorem ipsum dolor</p>}
					<div className="flex justify-center">
						<button className="flex items-center justify-center mt-6 text-h5 bg-orange_bg py-4 px-10 rounded-lg" onClick={demoWrap}>{demo ? 'hide' : 'show'}</button>
					</div>
				</div>
				<div className="mt-10 text-center">
					<input type="text" onChange={(e) => valueChange(e)} placeholder="enter name" style={{border: '1px solid #959595', background: 'transparent', padding: 12, borderRadius: 6, width: 240}} />
					<button onClick={allDataList} style={{border: 'none', borderRadius: 6, background: '#959595', padding: 13, fontWeight: 'bold', marginLeft: 6, width: 100}}>Add</button>
					<ul className="mt-5 text-start">
						{data.map((item, index) => {
							return (
								<li key={index}>{item}</li>
							)
						})}
					</ul>
				</div>
				<div className="mt-10">
					<ul className="text-center">
						{children.map((listing, index) => {
							return (
								<li key={index} className="text-p mt-3">
									{listing}
									<button onClick={() => deleteData(index)} style={{border: 'none', borderRadius: 6, background: '#959595', padding: 13, fontWeight: 'bold',fontSize: 14, marginLeft: 6, width: 100}}>Delete</button>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</>
	)
}

export default StateDemo;