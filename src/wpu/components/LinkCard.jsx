import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LinkCard = ({ title, text, buttonText, buttonLink, icon}) => {
	return (
		<div className='card shadow border-radius d-flex h-100'>
			<div className='card-body py-4 px-5'>
				<div className='mb-3'>
					<FontAwesomeIcon icon={icon} size="lg" />
				</div>
				<h5 className='card-title'>{title}</h5>
				<p className='card-text'>{text}</p>
				<a href={buttonLink} className='btn bg-primary btn-sm text-white'>{buttonText}</a>
			</div>
		</div>
	)
}
