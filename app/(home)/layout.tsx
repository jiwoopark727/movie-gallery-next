import styles from '../../styles/home-layout.module.css';

export default function AboutUsLayout({
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
