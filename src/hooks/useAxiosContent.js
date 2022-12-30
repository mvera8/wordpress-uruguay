import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxiosContent = ( url ) => {

    const [title, setTitle] = useState('');
  	const [content, setContent] = useState('');
    const [loading, setloading] = useState(false);

    const getContent = async () => {
      axios.get( url )
  			.then((response) => {
        	setTitle(response.data[0].title.rendered);
  				setContent(response.data[0].content.rendered);
  				// wp:term.taxonomy
      });
      setloading(true);
    }

    useEffect(() => {
      getContent();
    }, [url])

    return {
        title,
        content,
        loading,
    };
}