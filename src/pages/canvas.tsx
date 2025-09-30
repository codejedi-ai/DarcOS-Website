import styles from '@/styles/canvas.module.css';
import { Link } from 'ice';

export default function CanvasPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <header className={styles.hero}>
          <h1 className={styles.title}>Canvas</h1>
          <p className={styles.subtitle}>Graphics and visualization surface for DARCY128</p>
        </header>

        <main className={styles.main}>
          <div className={styles.canvasArea}>
            <div className={styles.placeholder}>Canvas goes here</div>
          </div>
        </main>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <Link to="/stepping" className={styles.nextBtn}>Next: Instruction Stepping →</Link>
        </div>
      </div>
    </div>
  );
}


