export const Content = ({ content }) => {
	return (
		<div className='py-5'>
			<div className='container'>
				<div className="row justify-content-center">
					<div
						className="col-12 col-md-7"
						dangerouslySetInnerHTML={{__html: content}}
					/>

					<div className="p-5 bg-light-primary mb-5 d-none">
						<div className="row">
							<div className="col-8">
								<h5>Lalala</h5>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
							<div className="col-4">
								<a href="#" className="btn btn-dark text-white">Compare</a>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}
