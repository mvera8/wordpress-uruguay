import { NavLink } from 'react-router-dom';

export const CategoryPost = ({ category }) => {
	return (
		<div className="mb-3">
			<NavLink
				className="text-decoration-none"
				to={'/category/' + category.toLowerCase()}>
					<span className="badge rounded-pill bg-light-primary text-primary">{category}</span>
			</NavLink>
		</div>
	)
}
