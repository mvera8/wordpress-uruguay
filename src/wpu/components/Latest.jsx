import { PostCard } from './PostCard';

// http://blog.wordpressuruguay.com/wp-json/wp/v2/posts?per_page=3

export const Latest = () => {
	return (
		<section className="section section-blog pb-5">
			<div className="container">
				<h2 className="pb-5 mb-0">Latest from the <span className="text-primary">blog</span></h2>
				<div className="row">
					<div className="col-12 col-md-4 d-flex">
						<PostCard />
					</div>
					<div className="col-12 col-md-4 d-flex">
						<PostCard />
					</div>
					<div className="col-12 col-md-4 d-flex">
						<PostCard />
					</div>
				</div>

				<div className="text-center">
					<div className="card card-info-link card-sm d-inline-block rounded">
						<div className="card-body py-2 px-5">
							Want to read more? <a className="card-link ms-2 text-primary" href="#">Go here <span className="bi-chevron-right small ms-1"></span></a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
