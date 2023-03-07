import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxiosLoop = ( url ) => {






    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [nrofpages, setNumberofpage] = useState(1);
    const [ loading, setLoading ] = useState( true );

    const getContent = async () => {
      axios.get( `${url}` )
			.then((response) => {
        console.log( `there are ${response.headers['x-wp-total']} posts divided in ${response.headers['x-wp-totalpages']} pages` );

        setNumberofpage(response.headers['x-wp-totalpages']);
        setPosts(response.data);
  			// wp:term.taxonomy
        setLoading( false );
      });
    }


    useEffect(() => {
      getContent();
    }, [page, setPosts])

    return {
        posts,
        nrofpages,
        page,
        loading,
    };
}