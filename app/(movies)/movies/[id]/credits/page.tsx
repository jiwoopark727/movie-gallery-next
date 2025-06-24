import { Suspense } from 'react';
import styles from '../../../../../styles/movie-credits.module.css';
import Credit, {
  getCredits,
  getMovie,
} from '../../../../../components/moive-credits';

type IParams = Promise<{
  id: string;
}>;

export async function generateMetadata(props: { params: IParams }) {
  const params = await props.params;
  const credits = await getCredits(params.id);
  const movie = await getMovie(params.id);
  return {
    title: `Credits - ${movie.title}`,
  };
}

export default async function CreditPage(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;
  console.log(id);
  return (
    <div>
      <Suspense fallback={<span className={styles.loader}></span>}>
        <Credit id={id}></Credit>
      </Suspense>
    </div>
  );
}
export const runtime = 'edge';
