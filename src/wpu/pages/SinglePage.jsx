import { useParams } from "react-router-dom"
import { useAxiosContent } from '../../hooks/useAxiosContent';
import { Content, HeaderSingle, Spinner } from '../components';

export const SinglePage = () => {

	const { id } = useParams();
	const { title, content, loading } = useAxiosContent( `http://blog.wordpressuruguay.com/wp-json/wp/v2/posts?slug=${id}` );

	return (
		<>
			{loading && (
				<Spinner />
			)}

			<HeaderSingle
				title={title}
			/>
			<Content
				content={content}
			/>
		</>
	)
}
