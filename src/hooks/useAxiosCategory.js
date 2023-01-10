import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxiosCategory = ( url ) => {

    const [name, setName] = useState('');
    const [description, setdescription] = useState('')
    const [loading, setloading] = useState(false);

    const getContent = async () => {
      axios.get( url )
  			.then((response) => {
        	setName(response.data[0].name);
          setdescription(response.data[0].description);
          console.log(response.data);
      });
      setloading(true);
    }

    useEffect(() => {
      getContent();
    }, [url])

    return {
        name,
        description,
        loading,
    };
}