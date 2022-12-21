import { useEffect, useState } from 'react'

export const CustomForm = ({ status, message, onValidated }) => {

	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');


	const handleSubmit = (e) => {
			e.preventDefault();
			email &&
			firstName &&
			lastName &&
			email.indexOf("@") > -1 &&
			onValidated({
					EMAIL: email,
					MERGE1: firstName,
					MERGE2: lastName,
			});

	}

	useEffect(() => {
			if(status === "success") clearFields();
	}, [status])

	const clearFields = () => {
			setFirstName('');
			setLastName('');
			setEmail('');
	}


	return (
		<form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
				<h3 className="display-2 mb-3">
						{ status === "success" ? "Success!" : "Subscribe to new posts." }
				</h3>

				{status === "sending" && (
						<div
								className="mc__alert mc__alert--sending"
						>sending...</div>
				)}
				{status === "error" && (
						<div
								className="mc__alert mc__alert--error"
								dangerouslySetInnerHTML={{ __html: message }}
						/>
				)}
				{status === "success" && (
						<div
								className="mc__alert mc__alert--success"
								dangerouslySetInnerHTML={{ __html: message }}
						/>
				)}

				<div className="row">
					{status !== "success" ? (
						<>
							<div className='col-3 mb-2'>
								<input
									label="First Name"
									onChange={setFirstName}
									className="form-control"
									type="text"
									value={firstName}
									placeholder="Jane"
									required
								/>
							</div>
							<div className='col-3 mb-2'>
								<input
									label="Last Name"
									onChange={setLastName}
									className="form-control"
									type="text"
									value={lastName}
									placeholder="Doe"
									required
								/>
							</div>
							<div className='col-4 mb-2'>
								<input
									label="Email"
									onChange={setEmail}
									className="form-control"
									type="email"
									value={email}
									placeholder="your@email.com"
									required
								/>
							</div>
						</>
					) : null}

						<div className='col-2 mb-2'>
							<button
								type='submit'
								onClick={ () => console.log('bien') }
								className="btn btn-primary d-block text-white w-100"
								>Subscribe</button>
						</div>
				</div>
		</form>
	)
}
