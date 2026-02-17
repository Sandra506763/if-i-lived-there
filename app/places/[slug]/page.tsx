import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "@/app/styles/place.module.css";
import { getPlace } from "../../data/places";

type Props = { params: { slug: string } };

export default function PlacePage({ params }: Props) {
  const place = getPlace(params.slug);
  if (!place) return notFound();

  // Wir wollen 4 Collage-Bilder (Nightlife klein als Akzent).
  // Falls du (noch) nur 3 hast, duplizieren wir das erste, bis 4 voll sind.
  const collage = place.collage ?? [];
  const collage4 =
    collage.length >= 4 ? collage.slice(0, 4) : [...collage, collage[0]].slice(0, 4);

  return (
    <main className={styles.page}>
      {/* Soft Hero Background über die ganze Seite */}
      <div className={styles.heroBg} aria-hidden="true">
        <Image
          src={place.hero}
          alt=""
          fill
          priority
          className={styles.heroImg}
          sizes="100vw"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroGrain} />
      </div>

      <section className={styles.content}>
        <header className={styles.header}>
          <p className={styles.kicker}>Place</p>
          <h1 className={styles.title}>{place.title}</h1>
          <p className={styles.subtitle}>{place.subtitle}</p>
        </header>

        <div className={styles.grid}>
          {/* Textblock (klar wie Variante 3) */}
          <div className={styles.textBlock}>
            <div className={styles.dayCard}>
              <div className={styles.row}>
                <span className={styles.label}>Morning</span>
                <p className={styles.value}>{place.day.morning}</p>
              </div>

              <div className={styles.row}>
                <span className={styles.label}>Noon</span>
                <p className={styles.value}>{place.day.noon}</p>
              </div>

              <div className={styles.row}>
                <span className={styles.label}>Evening</span>
                <p className={styles.value}>{place.day.evening}</p>
              </div>

              <div className={styles.note}>
                <span className={styles.noteDot} />
                <p className={styles.noteText}>{place.day.note}</p>
              </div>
            </div>
          </div>

          {/* Collage (hip, aber ruhig) */}
          <div className={styles.collageWrap}>
            <div className={styles.collage}>
              {collage4.map((img, idx) => (
                <figure
                  key={`${img.src}-${idx}`}
                  className={styles[`tile${idx + 1}` as const]}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className={styles.tileImg}
                    sizes="(max-width: 900px) 92vw, 540px"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottomFade} />
      </section>
    </main>
  );
}
