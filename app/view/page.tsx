import Link from "next/link";
import { places } from "../data/places";
import styles from "../styles/view.module.css";

export default function ViewPage() {
  const order = ["lofoten", "thailand", "sylt"] as const;
  const orderedPlaces = order
    .map((slug) => places.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
<main className={styles.page}>


      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

    
      <div className={styles.contentLayer}>
        <header className={styles.header}>
          <Link href="/" className={styles.back}>
            ← back
          </Link>

          <div className={styles.headText}>
      
            <h1 className={styles.title}>If I lived there…</h1>
            <p className={styles.kicker}>nicht reisen. leben.</p>
            <p className={styles.note}>
              Pick one place — and imagine a whole day there.
            </p>
          </div>
        </header>

        <section className={styles.collage}>
          {orderedPlaces.map((p, i) => (
            <Link
              key={p!.slug}
              href={`/places/${p!.slug}`}
              className={`${styles.card} ${styles[`card${i + 1}`]}`}
              aria-label={`Open ${p!.title}`}
            >
              <img className={styles.img} src={p!.cover} alt={p!.title} />
              <div className={styles.label}>
                <div className={styles.place}>{p!.title}</div>
                <div className={styles.sub}>{p!.subtitle}</div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
