import { CategoryPost } from "./CategoryPost";
import { NavLink } from 'react-router-dom';
import { generateJSXMeshGradient } from "meshgrad";

const ELEMENTS = 2;

export const PostCard = ({ title, slug, excerpt }) => {
	return (
		<div className='card w-100 h-100 shadow-sm'>
			<div className='card-body p-4'>
				<CategoryPost category = 'React' />
				<h5 className="card-title mb-3">
						<NavLink
							className="text-decoration-none"
							to={slug}>
								{title}
						</NavLink>
				</h5>
				<div
					 className="card-text mb-3 text-muted"
					dangerouslySetInnerHTML={{__html: excerpt}}
				/>
				<NavLink
					className="btn btn-outline-primary"
					to={slug}>
						See More
				</NavLink>
			</div>
			<div style={generateJSXMeshGradient(ELEMENTS)} className="card-img-bottom py-2" />
		</div>
	)
}
