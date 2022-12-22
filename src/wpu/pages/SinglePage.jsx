import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Content, HeaderSingle } from '../components';

// http://blog.wordpressuruguay.com/wp-json/wp/v2/posts/5
// http://blog.wordpressuruguay.com/wp-json/wp/v2/posts?slug=post-test-title

export const SinglePage = () => {

	const { id } = useParams();
	const baseURL = `http://blog.wordpressuruguay.com/wp-json/wp/v2/posts?slug=${id}`;
	const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get( baseURL )
			.then((response) => {
			console.log(response.data);
      setPost(response.data);
			// wp:term.taxonomy
			// content.renndered
    });
  }, []);

	console.log( id );
	console.log( post[0].title.rendered );

	return (
		<>
			<HeaderSingle
				title="a"
			/>
			<Content />
		</>
	)
}
