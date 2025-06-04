import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';
import styles from '../../../../styles/movie-info.module.css';

type IParams = Promise<{
  id: string;
}>;

export async function generateMetadata(props: { params: IParams }) {
  const params = await props.params;
  const movie = await getMovie(params.id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;
  return (
    <div>
      <Suspense fallback={<span className={styles.loader}></span>}>
        <MovieInfo id={id} />
      </Suspense>
      {/* <Suspense fallback={<span className={styles.loader}></span>}>
        <MovieVideos id={id} />
      </Suspense> */}
    </div>
  );
}
export const runtime = 'edge';
