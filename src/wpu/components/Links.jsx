
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { LinkCard } from './LinkCard';

export const Links = () => {
	return (
		<section className="py-5 mb-5">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-6">
						<LinkCard
							title="Join us on Facebook"
							text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum dictum odio vitae egestas semper."
							buttonText="Join Us"
							buttonLink="#"
							icon={faFacebook}
						/>
					</div>
					<div className="col-12 col-md-6">
						<LinkCard
							title="Follow us on Instagram"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec varius augue. Fusce dictum rhoncus urna, a eleifend nisi tincidunt non. In commodo fermentum arcu et gravida."
							buttonText="Follow Us"
							buttonLink="#"
							icon={faInstagram}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
