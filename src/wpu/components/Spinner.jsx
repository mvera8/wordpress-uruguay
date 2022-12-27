export const Spinner = () => {
	return (
		<div className="text-center">
			<div
				className="spinner-border text-light"
				role="status"
				style={{width: 100, height: 100}}
			>
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	)
}
