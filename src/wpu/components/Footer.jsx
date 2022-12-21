import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
	return (
		<footer className="text-center">
			<div className="container">
				<section>
					<div className="row text-center d-flex justify-content-center">
						<div className="col-md-2">
							<h6>
								<NavLink to="/">Home</NavLink>
							</h6>
						</div>

						<div className="col-md-2">
							<h6>
								<NavLink to="/about">Nosotros</NavLink>
							</h6>
						</div>

						<div className="col-md-2">
							<h6>
								<NavLink to="/blog">Blog</NavLink>
							</h6>
						</div>

						<div className="col-md-2">
							<h6>
								<NavLink to="/contact">Contacto</NavLink>
							</h6>
						</div>

						<div className="col-md-2">
							<h6>
								<NavLink to="/privacidad">Privacidad</NavLink>
							</h6>
						</div>
					</div>
				</section>

				<hr className="my-5" />

				<section className="text-center pb-5">
					<a href="" className="me-4">
						<FontAwesomeIcon icon={faInstagram} size="lg" />
					</a>
					<a href="" className="me-4">
						<FontAwesomeIcon icon={faFacebook} size="lg" />
					</a>
				</section>
			</div>
		</footer>
	)
}
