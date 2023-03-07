import { useAxiosLoop } from "../../hooks/useAxiosLoop";
import { CategoryCard } from "./CategoryCard"

const blogdomain = import.meta.env.VITE_BLOG_DOMAIN;

export const Categories = () => {

	const { posts, loading } = useAxiosLoop( `${blogdomain}/wp-json/wp/v2/categories?categories_exclude=1` );

	return (
		<section className="section-categories py-5">
			<div className="container">
				<h2 className="mb-5">Explore by <span className="text-primary">categories</span></h2>
				<div className="row">
					
					{posts.map( ( post, index ) => {
						return (
							<div key={ index } className="col-12 col-md-3 col-lg-2 d-flex">
								<CategoryCard 
									category={post.name}
									slug={post.slug}
									color="light-warning"
								/>
							</div>
						)}
					)}

				</div>
			</div>
		</section>
	)
}
