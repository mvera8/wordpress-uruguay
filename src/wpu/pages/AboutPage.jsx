import { useAxiosById } from '../../hooks/useAxiosById';
import { about } from '../data/about.json';
import { Content, HeaderAbout, Spinner } from '../components';

export const AboutPage = () => {

	const { content, loading } = useAxiosById( 18 );

	const PageContent = {
		subtitle: about[0].subtitle
	};

	return (
		<>
			<HeaderAbout
				title="Nosotros"
				subtitle={PageContent.subtitle}
			/>

			{!loading && (
				<Spinner />
			)}

			<Content
				content={content}
			/>
		</>
	)
}
