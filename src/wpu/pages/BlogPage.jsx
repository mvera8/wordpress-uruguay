import { useState } from 'react';
import { useWordPressPosts } from '../../hooks/useWordPressPosts';
import { HeaderPage, Pagination, PostCard, PostCardSkeleton } from '../components';

export const BlogPage = () => {

	const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3;
  const { posts, totalPages, isLoading, error } = useWordPressPosts(
    currentPage,
    perPage
  );

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

	return (
		<>
			<HeaderPage title="Blog" />

			<section id='Blog' className="section section-blog py-5">
				<div className="container">
					<div className="row">

						{isLoading && (
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

						{posts.map(post => (
							<div key={post.id} className="col-12 col-md-4 d-flex mb-5">
								<PostCard
									title={post.title.rendered}
									excerpt={post.excerpt.rendered}
									slug={'/' + post.slug}
								/>
							</div>
						))}

					</div>

					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>

				</div>
			</section>
		</>
	)
}
