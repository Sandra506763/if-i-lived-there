import Link from "next/link";
import styles from "./styles/home.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.center}>
        <Link href="/view" className={styles.title}>
          IF I LIVED THERE
        </Link>

        <p className={styles.sub}>NICHT REISEN. LEBEN.</p>
      </section>
    </main>
  );
}
