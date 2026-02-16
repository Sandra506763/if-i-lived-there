
import Link from "next/link";
import styles from "./styles/home.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
   
        <img
          className={styles.bg}
          src="/images/home/hero.jpg"
          alt="Hero background"
        />

       
        <div className={styles.overlayWarm} />

        <div className={`container ${styles.content}`}>
          <div className={styles.top}>
            <div className="kicker">nicht reisen. leben.</div>

            
            <Link href="/view" className={styles.titleHotspot} aria-label="Go to view">
  <span className={styles.srOnly}>Go to view</span>
</Link>


            <div className={styles.dots} />
          </div>

    
          <div className={styles.frameWrap}>
            <div className={styles.frame}>
              <img src="/images/home/frame.jpg" alt="Framed image" />
            </div>

            <div className={styles.frameLabel} aria-hidden="true">
              <div className={styles.viewWord}>View</div>
              <div className={styles.smallCaps}>Cities</div>
            </div>
          </div>

          <div className={styles.hint}>Klick auf den Titel, um weiterzugehen →</div>
        </div>
      </section>
    </main>
  );
}
