import Link from "next/link";
import { places } from "../data/places";
import styles from "../styles/view.module.css";

export default function ViewPage() {
  return (
    <main className={`container ${styles.page}`}>
      <header className={styles.header}>
        <Link href="/" className={styles.back}>
          ← back
        </Link>

        <div className={styles.headText}>
          <p className={styles.meta}>
            Issue 01 • 3 places • 2026
          </p>

          <h1 className={`${styles.title} ${styles.caveat}`}>
            If I lived there…
          </h1>

          <p className={styles.kicker}>
            nicht reisen. leben.
          </p>

          <p className={styles.note}>
            Pick one place — and imagine a whole day there.
          </p>
        </div>
      </header>

      <section className={styles.collage}>
        {places.map((p, i) => (
          <Link
            key={p.slug}
            href={`/places/${p.slug}`}
            className={`${styles.card} ${styles[`card${i + 1}`]}`}
            aria-label={`Open ${p.title}`}
          >
            <img
              className={styles.img}
              src={p.cover}
              alt={p.title}
            />

            <div className={styles.label}>
              <div className={styles.place}>{p.title}</div>
              <div className={styles.sub}>{p.subtitle}</div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
