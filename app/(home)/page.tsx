'use client';

import { Metadata } from 'next';
import { useEffect, useState } from 'react';
import { json } from 'stream/consumers';

// export const metadata: Metadata = {
//   title: 'Home',
// };

export default function Tomato() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      'https://nomad-movies.nomadcoders.workers.dev/movies'
    );

    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div>{isLoading ? 'Loading...' : JSON.stringify(movies)}</div>;
}
