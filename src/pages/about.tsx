import VantaBackground from '@/components/VantaBackground';
import Navbar from '@/components/Navbar';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <VantaBackground />
      <div className={styles.page}>
        <div className={styles.content}>
          <header className={styles.hero}>
            <h1 className={styles.title}>About DarcOS</h1>
            <p className={styles.subtitle}>Understanding our vision and mission</p>
          </header>

          <main className={styles.main}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Our Mission</h2>
              <p className={styles.sectionBody}>
                DarcOS represents a fundamental reimagining of what an operating system can be. 
                We're building a system that prioritizes transparency, predictability, and true 
                portability across diverse hardware platforms.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>The Problem We're Solving</h2>
              <p className={styles.sectionBody}>
                Modern operating systems have become increasingly complex, opaque, and tied to 
                specific hardware architectures. This complexity makes them difficult to reason 
                about, debug, and port to new platforms. DarcOS addresses these challenges by 
                embracing simplicity and determinism at its core.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Our Approach</h2>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <h3>Minimal Core</h3>
                  <p>
                    A small, analyzable kernel that provides only essential services, 
                    making the system easier to understand and verify.
                  </p>
                </div>
                <div className={styles.card}>
                  <h3>WLP4P Foundation</h3>
                  <p>
                    Built on Waterloo Language Plus Pointers Plus Procedures, providing 
                    deterministic behavior and predictable performance characteristics.
                  </p>
                </div>
                <div className={styles.card}>
                  <h3>Device Agnostic</h3>
                  <p>
                    Designed from the ground up to run on any hardware platform without 
                    modification, enabling true portability.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>The Team</h2>
              <p className={styles.sectionBody}>
                DarcOS is developed by a passionate team of systems programmers, researchers, 
                and engineers who believe in the power of simplicity and the importance of 
                building systems that can be understood and trusted.
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
