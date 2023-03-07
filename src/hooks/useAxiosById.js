import axios from 'axios';
import { useEffect, useState } from 'react';

const blogdomain = import.meta.env.VITE_BLOG_DOMAIN;

export const useAxiosById = ( id ) => {

  	const [content, setContent] = useState('');
    const [loading, setloading] = useState(false);

    const getContent = async () => {
      axios.get( `${blogdomain}/wp-json/wp/v2/pages/${id}` )
  			.then((response) => {
  				setContent(response.data.content.rendered);
  				// wp:term.taxonomy
      });
      setloading(true);
    }

    useEffect(() => {
      getContent();
    }, [id])

    return {
        content,
        loading,
    };
}