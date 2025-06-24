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
  // console.log(movie_credit);
  return (
    <div>
      {credits.map((credit) => (
        <div>
          <img src={credit.profile_path} alt='' className={styles.profileImg} />
          <p>{credit.name}</p>
          <p>{credit.character}</p>
          <p>⭐{credit.popularity}</p>
        </div>
      ))}
      아니 왜 안뜸?
    </div>
  );
}
