import { API_URL } from '../app/constants';
import styles from '../styles/movie-credits.module.css';

export async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const credits = await getCredits(id);
  const movie = await getMovie(id);
  console.log(credits);
  return (
    <div>
      <div className={styles.title}>{movie.title}</div>
      <div className={styles.wrapper}>
        {credits.map((credit) => (
          <div key={credit.id} className={styles.container}>
            <img
              src={credit.profile_path}
              alt=''
              className={styles.profileImg}
            />
            <p className={styles.name}>{credit.name}</p>
            <p className={styles.c_name}>{credit.character}</p>
            <p className={styles.popular}>⭐ {credit.popularity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
