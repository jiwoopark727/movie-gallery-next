import { Metadata } from 'next';
import styles from '../../styles/about-us.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faBook, faNoteSticky } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'About us',
};

export default function AboutUs() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainTitle}>About</div>

      <div className={styles.subTitle}>Me</div>
      <p>Name : Ian Park (박지우)</p>
      <p>Age : 25</p>
      <p>Job : Web F/E Developer</p>
      <p>Location : Bucheon, Korea</p>

      <div className={styles.subTitle}>Skills</div>
      <div className={styles.skillsIcon}>
        <Image
          src={
            'https://img.shields.io/badge/HTML-lightgray.svg?style=for-the-badge&logo=html5&logoColor=E34F26'
          }
          alt='HTML'
          width={95}
          height={30}
        />
        <Image
          src={
            'https://img.shields.io/badge/CSS-lightgray.svg?style=for-the-badge&logo=css3&logoColor=1572B6'
          }
          alt='CSS'
          width={57}
          height={30}
        />
        <Image
          src={
            'https://img.shields.io/badge/JavaScript-lightgray.svg?style=for-the-badge&logo=javascript&logoColor=F7DF1E'
          }
          alt='JavaScript'
          width={139}
          height={30}
        />
        <Image
          src={
            'https://img.shields.io/badge/React-lightgray.svg?style=for-the-badge&logo=react&logoColor=61DAFB'
          }
          alt='React'
          width={95}
          height={30}
        />
        <Image
          src={
            'https://img.shields.io/badge/TypeScript-lightgray.svg?style=for-the-badge&logo=typescript&logoColor=61DAFB'
          }
          alt='TypeScript'
          width={140}
          height={30}
        />
        <Image
          src={
            'https://img.shields.io/badge/nextjs-lightgray.svg?style=for-the-badge&logo=nextjs&logoColor=61DAFB'
          }
          alt='nextJS'
          width={78}
          height={30}
        />
        <Image
          src={
            'https://img.shields.io/badge/styled components-lightgray.svg?style=for-the-badge&logo=styled-components&logoColor=DB7093'
          }
          alt='styled components'
          width={200}
          height={30}
        />
        <Image
          src={
            'https://img.shields.io/badge/Tailwind CSS-lightgray.svg?style=for-the-badge&logo=TailwindCSS&logoColor=06B6D4'
          }
          alt='Tailwind CSS'
          width={140}
          height={30}
        />
        <Image
          src={
            'https://img.shields.io/badge/Recoil-lightgray.svg?style=for-the-badge&logo=recoil&logoColor=3078E5'
          }
          alt='Recoil'
          width={112}
          height={30}
        />
        <Image
          src={
            'https://img.shields.io/badge/Zustand-lightgray.svg?style=for-the-badge&logo=zustand&logoColor=1572B6'
          }
          alt='Zustand'
          width={100}
          height={30}
        />
        <Image
          src={
            'https://img.shields.io/badge/Redux-lightgray.svg?style=for-the-badge&logo=redux&logoColor=764ABC'
          }
          alt='Redux'
          width={110}
          height={30}
        />
        <Image
          src={
            'https://img.shields.io/badge/My SQL-lightgray.svg?style=for-the-badge&logo=mysql&logoColor=4479A1'
          }
          alt='My SQL'
          width={100}
          height={30}
        />
        <Image
          src={
            'https://img.shields.io/badge/FireBase-lightgray.svg?style=for-the-badge&logo=firebase&logoColor=DD2C00'
          }
          alt='FireBase'
          width={118}
          height={30}
        />
        <Image
          src={
            'https://img.shields.io/badge/Maria DB-lightgray.svg?style=for-the-badge&logo=mariadb&logoColor=003045'
          }
          alt='Maria DB'
          width={115}
          height={30}
        />
      </div>

      <div className={styles.subTitle}>Links</div>
      <span className={styles.linksIcon}>
        <a href='https://github.com/jiwoopark727' target='_blank'>
          <FontAwesomeIcon icon={faSquareGithub} />
        </a>
      </span>
      <span className={styles.des}>(포트폴리오)</span>
      <span className={styles.linksIcon}>
        <a href='https://devvoo.tistory.com/' target='_blank'>
          <FontAwesomeIcon icon={faNoteSticky} />
        </a>
      </span>
      <span className={styles.des}>(블로그)</span>
      <span className={styles.linksIcon}>
        <a href='https://pjw-portfolio1.vercel.app/' target='_blank'>
          <FontAwesomeIcon icon={faBook} />
        </a>
      </span>
      <span className={styles.des}>(포트폴리오)</span>
    </div>
  );
}
