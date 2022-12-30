import { useAxiosById } from '../../hooks/useAxiosById';
import { Content, HeaderAbout, Spinner } from '../components';

export const AboutPage = () => {

	const { content, loading } = useAxiosById( 18 );

	return (
		<>
			

			<HeaderAbout title="Nosotros" />

			{!loading && (
				<Spinner />
			)}

			<Content
				content={content}
			/>
		</>
	)
}
