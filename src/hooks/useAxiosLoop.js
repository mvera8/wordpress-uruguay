import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxiosLoop = ( url ) => {

    const [posts, setPosts] = useState([]);
    const [loading, setloading] = useState(true);

    const getContent = async () => {
      axios.get( url )
			.then((response) => {
        setPosts(response.data);
  			// wp:term.taxonomy
      });
      setloading(false);
    }


    useEffect(() => {
      getContent();
    }, [url])

    return {
        posts,
        loading,
    };
}