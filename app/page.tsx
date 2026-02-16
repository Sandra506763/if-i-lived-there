import Link from "next/link";
import styles from "./styles/home.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>

        {/* Background image */}
        <img
          className={styles.bg}
          src="/images/home/hero.jpg"
          alt="If I lived there"
        />

        {/* Warm overlay */}
        <div className={styles.overlayWarm} />

        {/* Klickbarer Bereich über dem Schriftzug */}
        <Link
          href="/view"
          className={styles.titleHotspot}
          aria-label="Go to view page"
        >
          <span className={styles.srOnly}>Go to view page</span>
        </Link>

      </section>
    </main>
  );
}
