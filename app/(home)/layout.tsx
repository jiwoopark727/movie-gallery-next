import styles from '../../styles/about-us.module.css';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.pageWrapper}>
      <main className={styles.mainContent}>{children}</main>
      <footer className={styles.container}>
        &copy; 2025. Jiwoo Park. All rights reserved.
      </footer>
    </div>
  );
}
