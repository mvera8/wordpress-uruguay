import axios from 'axios';
import { useEffect, useState } from 'react';

const blogdomain = import.meta.env.VITE_BLOG_DOMAIN;

export const useAxiosContent = ( postSlug ) => {

    const [title, setTitle] = useState('');
  	const [content, setContent] = useState('');
    const [excerpt, setExcerpt] = useState('');

    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      setIsLoading(true);
      setError(null);
      axios.get( `${blogdomain}/wp-json/wp/v2/posts?slug=${postSlug}` )
  			.then((response) => {
        	setTitle(response.data[0].title.rendered);
          setId(response.data[0].id);
  				setContent(response.data[0].content.rendered);
          setExcerpt(response.data[0].excerpt.rendered);
          setTags(response.data[0].tags);
          setIsLoading(false);

          return axios.all([
            axios.get(`${blogdomain}/wp-json/wp/v2/categories?post=${response.data[0].id}`),
            axios.get(`${blogdomain}/wp-json/wp/v2/tags?post=${response.data[0].id}`)
          ]);
        })
        .then(
          axios.spread((categoriesResponse, tagsResponse) => {
            setCategories(categoriesResponse.data);
            setTags(tagsResponse.data);
          })
        )
        .catch(error => {
          setError(error);
          setIsLoading(false);
        });
    }, [postSlug]);


    return {
        title,
        content,
        categories,
        tags,
        excerpt,
        isLoading,
    };
}