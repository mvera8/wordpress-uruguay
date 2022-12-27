import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxiosCategory = ( url ) => {

    const [name, setName] = useState('');
    const [loading, setloading] = useState(true);

    const getContent = async () => {
      axios.get( url )
  			.then((response) => {
        	setName(response.data[0].name);
      });
      setloading(false);
    }

    useEffect(() => {
      getContent();
    }, [url])

    return {
        name,
        loading,
    };
}