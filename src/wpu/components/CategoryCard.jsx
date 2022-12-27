import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export const CategoryCard = ({ category, color, slug }) => {
	return (
		<div className='card mb-5 w-100 shadow-sm'>
			<div className='card-body px-3 py-5 text-center'>
				<div className={ 'text-center icons rounded mb-5 bg-' + color }>
						<FontAwesomeIcon icon={faFacebook} />
				</div>
				<h5 className="card-title mb-0">
						<NavLink className="text-decoration-none" to={'/category/' + slug}>{category}</NavLink>
				</h5>
			</div>
		</div>
	)
}
