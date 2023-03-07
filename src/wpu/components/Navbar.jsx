import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import '../assets/scss/components/Navbar.scss';

const sitename = import.meta.env.VITE_SITE_NAME;

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<img className='navbar-logo' src="/wpu.svg" alt={sitename} />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<NavLink className="nav-link" to="/">Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/about">Nosotros</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/blog">Blog</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/category">Categorias</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/contact">Contacto</NavLink>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="https://www.instagram.com/wordpressuruguay/" target="_blank">
								<FontAwesomeIcon icon={faInstagram} size="lg" />
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link ms-1" href="https://www.facebook.com/groups/162652044298342" target="_blank">
								<FontAwesomeIcon icon={faFacebook} size="lg" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
