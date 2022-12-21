export const Breadcrumb = () => {
	return (
		<section className='pt-3 mb-5'>
			<div className='container'>
				<div className="row justify-content-center">
					<div className="col-12 col-md-8">
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item"><a href='url'>Home</a></li>
								<li className="breadcrumb-item active" aria-current="page">Page</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</section>
	)
}
