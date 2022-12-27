import { useAxiosLoop } from "../../hooks/useAxiosLoop";
import { CategoryCard } from "./CategoryCard"

export const Categories = () => {

	const { posts, loading } = useAxiosLoop( `http://blog.wordpressuruguay.com/wp-json/wp/v2/categories` );

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
