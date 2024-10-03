import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const ApiDemo = () => {

	const [photos, setPhotos] = useState([]);

	useEffect(()=> {
		test();
	}, []);
	
	const test = async () => {
		// try {
		// 	const response = await fetch('https://fakestoreapi.com/products');
		// 	const data = await response.json();
		// 	setPhotos(data);
		// }
		// catch(error) {
		// 	console.log(error);
		// }
		
		try{
			const response = await axios.get('https://fakestoreapi.com/products');
			const data = await response.data;
			setPhotos(data);
		}
		catch(error) {
			console.log(error);
		}
	}

	return (
		<>
			<div className="about block relative mt-20 mb-52">
				<div className="container">
					<h2 className="text-h2 text-center font-medium">ApiDemo</h2>
					<div className="mt-10 w-full grid grid-cols-3 gap-x-6 gap-y-8">
						{photos.splice(0, 6).map((productDetail, index) => {
							const {title, image, description} = productDetail;
							return (
								<div key={index} className="product_box block relative">
									<div className="image flex w-full relative after:content-[''] after:block after:py-[40%] after:px-[50%] before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black_bg before:opacity-50 before:z-[1] mb-4">
										<Image src={image} alt="image" width={200} height={200} className="w-full h-full absolute left-0 top-0 object-cover" />
									</div>
									<h3 className="heading text-h6 mb-4 line-clamp-1">
										{title}
									</h3>
									<p className="text_wrap text-[16px] leading-snug mb-4 line-clamp-2">
										{description}
									</p>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}

export default ApiDemo;