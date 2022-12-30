import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxiosLoop = ( url ) => {

    const [posts, setPosts] = useState([]);
    const [loading, setloading] = useState(false);

    const getContent = async () => {
      axios.get( url )
			.then((response) => {
        setPosts(response.data);
  			// wp:term.taxonomy
      });
      setloading(true);
    }


    useEffect(() => {
      getContent();
    }, [url])

    return {
        posts,
        loading,
    };
}