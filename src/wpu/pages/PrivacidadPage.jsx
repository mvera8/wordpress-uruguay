import { useAxiosById } from '../../hooks/useAxiosById';
import { Content, HeaderPage, Spinner } from '../components';

export const PrivacidadPage = () => {

	const { content, loading } = useAxiosById( 3 );


	return (
		<>

			<HeaderPage title="Privacidad" />

			{!loading && (
				<Spinner />
			)}

			<Content
				content={content}
			/>
		</>
	)
}
