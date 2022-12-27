import { useParams } from 'react-router-dom';
import { useAxiosCategory } from '../../hooks/useAxiosCategory';
import { Content, HeaderCategory, Spinner } from '../components';

export const CategoryPage = () => {

	const { id } = useParams();
	const { name, loading } = useAxiosCategory( `http://blog.wordpressuruguay.com/wp-json/wp/v2/categories?slug=${id}` );

	return (
		<>
			{loading && (
				<Spinner />
			)}

			<HeaderCategory title={name} />
			<Content />
		</>
	)
}
