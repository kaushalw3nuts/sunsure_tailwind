import { useState } from 'react';

const FormSection = () => {

	const modal = {
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		username: '',
		contact: '',
	};

 	const errorMsg = {
		firstname: null,
		lastname: null,
		email: null,
		password: null,
		username: null,
		contact: null,
 	}

	const [formVal, setFormVal] = useState(modal);
	const [formError, setFormError] = useState(errorMsg);

	const validation = (key, value) => {
		if(!value.length) {
			setFormError({
				...formError,
				[key]: `${key} field is required`,
			})
		}else {
			setFormError({
				...formError,
				[key]: null,
			})
		}
	}

	const getFormValue = (e) => {
		const input = e.target
		const value = input.value
		const key = input.name
		setFormVal({
			...formVal,
			[key]: value
		})

		validation(key, value);
	}

	const signup = (e) => {
		e.preventDefault();
		const formSub = Object.keys(formVal);
		for(let key of formSub) {
			let value = formVal[key];
			validation(key, value);
		}
	}

  	return (
		<>
			<div className="block relative mt-16 mb-60">
				<div className="container">
					<h2 className="text-h2 text-center font-medium uppercase">Get In Touch</h2>
					<div className="bg-slate-900 max-w-[600px] mx-auto mt-6">
						<form className="flex flex-col gap-4 p-5" onSubmit={signup}>
							<div className="flex flex-col gap-2">
								<label className="text-p font-medium">Firstname</label>
								<input onChange={getFormValue} type="text" name="firstname" placeholder="first name" className="bg-transparent border border-solid border-slate-500 px-4 py-3 rounded text-[16px] font-normal capitalize text-neutral-400" />
								{ formError.firstname && <span className="text-red-600 font-bold mt-1">{formError.firstname}</span> }
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-p font-medium">Lastname</label>
								<input onChange={getFormValue} type="text" name="lastname" placeholder="last name" className="bg-transparent border border-solid border-slate-500 px-4 py-3 rounded text-[16px] font-normal capitalize text-neutral-400" />
								{ formError.lastname && <span className="text-red-600 font-bold mt-1">{formError.lastname}</span> }
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-p font-medium">Email</label>
								<input onChange={getFormValue} type="email" name="email" placeholder="xyz@gmail.com" className="bg-transparent border border-solid border-slate-500 px-4 py-3 rounded text-[16px] font-normal lowercase text-neutral-400" />
								{ formError.email && <span className="text-red-600 font-bold mt-1">{formError.email}</span> }
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-p font-medium">Password</label>
								<input onChange={getFormValue} type="password" name="password" placeholder="*******" className="bg-transparent border border-solid border-slate-500 px-4 py-3 rounded text-[16px] font-normal text-neutral-400" />
								{ formError.password && <span className="text-red-600 font-bold mt-1">{formError.password}</span> }
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-p font-medium">Username</label>
								<input onChange={getFormValue} type="text" name="username" placeholder="@Username" className="bg-transparent border border-solid border-slate-500 px-4 py-3 rounded text-[16px] font-normal text-neutral-400" />
								{ formError.username && <span className="text-red-600 font-bold mt-1">{formError.username}</span> }
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-p font-medium">Contact no.</label>
								<input onChange={getFormValue} type="number" name="contact" placeholder="9462318971" className="bg-transparent border border-solid border-slate-500 px-4 py-3 rounded text-[16px] font-normal text-neutral-400" />
								{ formError.contact && <span className="text-red-600 font-bold mt-1">{formError.contact}</span> }
							</div>

							<button className="bg-gradient-to-r from-teal-400 to-blue-500 rounded px-4 py-2 mt-4 text-lg font-medium">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</>
  	)
}

export default FormSection;