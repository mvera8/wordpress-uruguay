import { CategoryPost } from "./CategoryPost";
import { NavLink } from 'react-router-dom';


export const PostCard = () => {
	return (
		<div className='card mb-5'>
			<div className='card-body p-4 shadow-sm'>
				<h5 className="card-title mb-3">
						<a className="text-decoration-none" href="#">
							Page Builders Let You Develop Websites Without Code
						</a>
				</h5>
				<CategoryPost dataFromParent = 'React' />
				<p className="card-text mb-3 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis, mi a fermentum aliquet, felis velit pharetra nunc, in posuere magna ante pulvinar justo. Donec eleifend felis et sem dictum venenatis. </p>
				<NavLink className="btn btn-outline-primary" to="/blog/1">See More</NavLink>
			</div>
		</div>
	)
}
