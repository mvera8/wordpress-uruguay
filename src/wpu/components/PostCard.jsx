import { CategoryPost } from "./CategoryPost";
import { NavLink } from 'react-router-dom';

export const PostCard = ({ title, slug, excerpt }) => {
	return (
		<div className='card mb-5 w-100'>
			<div className='card-body p-4 shadow-sm'>
				<h5 className="card-title mb-3">
						<a className="text-decoration-none" href="#">
							{title}
						</a>
				</h5>
				<CategoryPost dataFromParent = 'React' />
				<div
					 className="card-text mb-3 text-muted"
					dangerouslySetInnerHTML={{__html: excerpt}}
				/>
				<NavLink className="btn btn-outline-primary" to={'/blog/' + slug}>See More</NavLink>
			</div>
		</div>
	)
}
