import styles from '@/styles/stepping.module.css';
import { Link } from 'ice';

export default function SteppingPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <header className={styles.hero}>
          <h1 className={styles.title}>Instruction Stepping</h1>
          <p className={styles.subtitle}>Step through instructions and observe execution flow</p>
        </header>

        <main className={styles.main}>
          <div className={styles.panelGrid}>
            <div className={styles.panel}>
              <h3>Program</h3>
              <div className={styles.placeholder}>Program listing</div>
            </div>
            <div className={styles.panel}>
              <h3>Execution</h3>
              <div className={styles.placeholder}>Controls: Step / Run / Reset</div>
            </div>
          </div>
        </main>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <Link to="/registers" className={styles.nextBtn}>Next: Register View →</Link>
        </div>
      </div>
    </div>
  );
}


