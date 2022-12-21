export const HeroAbout = ({ title }) => {
	return (
		<div className='py-5 bg-light-warning text-center'>
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
				<div className="row justify-content-center">
					<div className="col-12 col-md-4">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque.</p>
					</div>
				</div>
			</div>
		</div>
	)
}
