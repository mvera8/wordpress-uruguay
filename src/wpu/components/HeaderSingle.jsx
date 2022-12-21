export const HeaderSingle = ({ title }) => {
	return (
		<div className='pt-5 text-center'>
			<div className='container'>
				<div className="row justify-content-center">
					<div className="col-12 col-md-8">
						<header className="entry-header">
							<h1 className="entry-title mb-4">
								{title}
							</h1>
						</header>
					</div>
				</div>
			</div>
		</div>
	)
}
