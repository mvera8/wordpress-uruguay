import { CategoryCard } from "./CategoryCard"

export const Categories = () => {
	return (
		<section className="section-categories py-5">
			<div className="container">
				<h2 className="mb-5">Explore by <span className="text-primary">categories</span></h2>
				<div className="row">
					<div className="col-12 col-md-3 col-lg-2 d-flex">
						<CategoryCard category="WordPress" color="light-warning" />
					</div>
					<div className="col-12 col-md-3 col-lg-2 d-flex">
						<CategoryCard category="React" color="light-primary" />
					</div>
				</div>
			</div>
		</section>
	)
}
