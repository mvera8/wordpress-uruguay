import heroImage from '../assets/images/hero_image.svg';
import cloudRight from '../assets/images/cloud_right.svg';
import cloudLeft from '../assets/images/cloud_left.svg';

import '../assets/scss/components/Hero.scss';

export const Hero = () => {
	return (
		<section className="hero bg-light-primary py-5">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-12 col-md-5">
						<h1 className="mb-5 display-1 hero__title">Comunidad Uruguaya de <span className='text-primary'>WordPress.</span></h1>
						<p className="lead mb-5 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et lacinia orci.</p>
						<p>
							<a href="#" className="btn btn-primary btn-lg text-white">Get Started</a>
						</p>
					</div>
					<div className="col-12 col-md-6 offset-md-1">
						<div className="py-5">
							<div className="hero__image">
								<div className="hero__image__main">
									<img className="img-fluid" src={heroImage} alt="Lala" />
								</div>
								<div className="hero__image__cloud hero__image__cloud--left">
									<img className="img-fluid" src={cloudLeft} alt="Cloud 1" />
								</div>
								<div className="hero__image__cloud hero__image__cloud--right">
									<img className="img-fluid" src={cloudRight} alt="Cloud 2" />
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
