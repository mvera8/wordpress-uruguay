import { useAxiosLoop } from '../../hooks/useAxiosLoop';
import { HeaderPage, PostCard, PostCardSkeleton } from '../components'

export const BlogPage = () => {

	const { posts, loading } = useAxiosLoop( `http://blog.wordpressuruguay.com/wp-json/wp/v2/posts` );

	return (
		<>
			<HeaderPage title="Blog" />

			<section id='Blog' className="section section-blog py-5">
				<div className="container">
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
				</div>
			</section>
			
		</>
	)
}
