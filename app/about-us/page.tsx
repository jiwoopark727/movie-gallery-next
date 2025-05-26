import { Metadata } from 'next';
import styles from '../../styles/about-us.module.css';

export const metadata: Metadata = {
  title: 'About us',
};

export default function AboutUs() {
  return (
    <div className={styles.mainContainer}>
      <div>이름: 박지우</div>
      <div>거주지: 경기도 부천시</div>
      <div>깃허브: https://github.com/jiwoopark727</div>
      <div>티스토리: https://devvoo.tistory.com/</div>
    </div>
  );
}
