import { NavLink } from 'react-router-dom';

export const CategoryPost = ({ category }) => {
	return (
		<div className="mb-3">
			<NavLink
				className="text-decoration-none"
				to={'/category/' + category.toLowerCase()}>
					<span className="badge bg-light-primary text-primary py-2 px-3 rounded">{category}</span>
			</NavLink>
		</div>
	)
}
