
export const PostCardSkeleton = () => {
	return (
		<div className='card mb-5 w-100'>
			<div className='card-body p-4 shadow-sm'>
				<h5 className="card-title mb-3 placeholder-glow">
					<span className="placeholder col-10"></span>
				</h5>
				<div className="badge bg-light-warning text-primary py-2 px-3 rounded placeholder-glow">
					<span className="placeholder col-5"></span>
				</div>
				<div className="card-text mb-3 placeholder-glow">
					<span className="placeholder col-7"></span>
					<span className="placeholder col-4"></span>
					<span className="placeholder col-4"></span>
					<span className="placeholder col-6"></span>
					<span className="placeholder col-8"></span>
				</div>
				<a href="#" className="btn btn-primary disabled placeholder"></a>
			</div>
		</div>
	)
}
