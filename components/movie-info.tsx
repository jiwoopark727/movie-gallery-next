import Link from 'next/link';
import { API_URL } from '../app/constants';
import styles from '../styles/movie-info.module.css';

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  // console.log(movie);
  return (
    <div>
      <div className={styles.title1}>{movie.title}</div>
      <div className={styles.sub_title}>Information</div>
      <div className={styles.container}>
        <img src={movie.poster_path} alt='' className={styles.poster} />
        <div className={styles.info}>
          <h1 className={styles.title2}>{movie.title}</h1>
          <h3>⭐ {movie.vote_average.toFixed(1)}/10</h3>
          <h3>📆 {movie.release_date}</h3>
          <h3>⏰ {movie.runtime}minutes</h3>
          <p>{movie.overview}</p>
          <div className={styles.button_container}>
            <button className={styles.styled_button}>
              <a href={movie.homepage} target='_blank'>
                Homepage 🔗
              </a>
            </button>
            <button className={styles.styled_button}>
              <Link href={`/movies/${id}/credits`}>Credits 🔗</Link>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.sub_title}>Related Videos</div>
    </div>
  );
}
