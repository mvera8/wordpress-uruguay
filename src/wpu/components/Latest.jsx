import { useAxiosLoop } from '../../hooks/useAxiosLoop';
import { PostCard } from './PostCard';
import { PostCardSkeleton } from './PostCardSkeleton';

export const Latest = () => {

	const { posts, loading } = useAxiosLoop( `http://blog.wordpressuruguay.com/wp-json/wp/v2/posts?per_page=3` );

	return (
		<section id='Latest' className="section section-blog pb-5">
			<div className="container">
				<h2 className="pb-5 mb-0">Latest from the <span className="text-primary">blog</span></h2>
				<div className="row">

					{!loading && (
						<>
							<div className="col-12 col-md-4 d-flex">
								<PostCardSkeleton />
							</div>
							<div className="col-12 col-md-4 d-flex">
								<PostCardSkeleton />
							</div>
							<div className="col-12 col-md-4 d-flex">
								<PostCardSkeleton />
							</div>
						</>
					)}

					{posts.map( ( post, index ) => {
						return (
							<div key={ index } className="col-12 col-md-4 d-flex">
								<PostCard 
									title={post.title.rendered}
									excerpt={post.excerpt.rendered}
									slug={post.slug}
								/>
							</div>
						)}
					)}

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
