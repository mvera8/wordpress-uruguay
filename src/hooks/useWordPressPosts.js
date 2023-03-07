import { useState, useEffect } from 'react';
import axios from 'axios';

const blogdomain = import.meta.env.VITE_BLOG_DOMAIN;

export const useWordPressPosts = (currentPage, perPage) => {
  const [posts, setPosts] = useState(() => {
    return JSON.parse(localStorage.getItem(`posts-${currentPage}`)) || [];
  });
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    axios
      .get(`${blogdomain}/wp-json/wp/v2/posts?per_page=${perPage}&page=${currentPage}`)
      .then(response => {
        setPosts(response.data);
        setTotalPages(response.headers['x-wp-totalpages']);
        setIsLoading(false);
        localStorage.setItem(
          `posts-${currentPage}`,
          JSON.stringify(response.data)
        );
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [currentPage, perPage]);

  return { posts, totalPages, isLoading, error };
}
