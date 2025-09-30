import styles from '@/styles/registers.module.css';
import { Link } from 'ice';

export default function RegistersPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <header className={styles.hero}>
          <h1 className={styles.title}>Register View</h1>
          <p className={styles.subtitle}>Inspect DARCY128 general-purpose registers, PC, and flags</p>
        </header>

        <main className={styles.main}>
          <div className={styles.grid}>
            <div className={styles.card}><h3>PC</h3><div className={styles.valueBox}>0x00000000_00000000</div></div>
            <div className={styles.card}><h3>FLAGS</h3><div className={styles.valueBox}>Z=0 N=0 C=0 V=0</div></div>
            {
              Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className={styles.card}><h3>R{i}</h3><div className={styles.valueBox}>0x00000000_00000000</div></div>
              ))
            }
          </div>
        </main>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <Link to="/canvas" className={styles.nextBtn}>Back to Canvas ↺</Link>
        </div>
      </div>
    </div>
  );
}


