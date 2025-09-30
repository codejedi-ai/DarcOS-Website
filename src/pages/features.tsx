import VantaBackground from '@/components/VantaBackground';
import Navbar from '@/components/Navbar';
import styles from '@/styles/features.module.css';

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <VantaBackground />
      <div className={styles.page}>
        <div className={styles.content}>
          <header className={styles.hero}>
            <h1 className={styles.title}>DarcOS Features</h1>
            <p className={styles.subtitle}>Core capabilities and technical specifications</p>
          </header>

          <main className={styles.main}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Core Features</h2>
              <div className={styles.featureGrid}>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>⚡</div>
                  <h3>Deterministic Execution</h3>
                  <p>
                    Predictable behavior and performance characteristics through 
                    WLP4P's strict semantics and controlled memory management.
                  </p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🌐</div>
                  <h3>Device Agnostic</h3>
                  <p>
                    Runs identically across different hardware platforms without 
                    modification, enabling true portability and consistency.
                  </p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🔧</div>
                  <h3>Minimal Surface Area</h3>
                  <p>
                    Small, analyzable kernel with only essential services, 
                    reducing complexity and attack surface.
                  </p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🛡️</div>
                  <h3>Memory Safety</h3>
                  <p>
                    Controlled pointer semantics and explicit memory management 
                    prevent common security vulnerabilities.
                  </p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>⚙️</div>
                  <h3>Runtime Compatibility</h3>
                  <p>
                    Stable runtime surface that abstracts hardware differences 
                    while maintaining performance transparency.
                  </p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>📊</div>
                  <h3>Formal Verification</h3>
                  <p>
                    Designed for formal reasoning and verification, enabling 
                    mathematical proofs of system properties.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Technical Specifications</h2>
              <div className={styles.specs}>
                <div className={styles.specGroup}>
                  <h3>Language Foundation</h3>
                  <ul>
                    <li>WLP4P (Waterloo Language Plus Pointers Plus Procedures)</li>
                    <li>Strict subset of C++ for predictable compilation</li>
                    <li>Controlled pointer semantics</li>
                    <li>Explicit memory management</li>
                  </ul>
                </div>
                <div className={styles.specGroup}>
                  <h3>Runtime Characteristics</h3>
                  <ul>
                    <li>Device-agnostic runtime surface</li>
                    <li>Deterministic execution model</li>
                    <li>Minimal kernel footprint</li>
                    <li>Hardware abstraction without performance hiding</li>
                  </ul>
                </div>
                <div className={styles.specGroup}>
                  <h3>Development Philosophy</h3>
                  <ul>
                    <li>Transparency in cost and behavior</li>
                    <li>Explicit control over implicit magic</li>
                    <li>Verifiability and formal reasoning</li>
                    <li>Consistency across platforms</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Performance Characteristics</h2>
              <div className={styles.performance}>
                <div className={styles.perfCard}>
                  <h3>Startup Time</h3>
                  <p>Sub-second boot times on supported hardware</p>
                </div>
                <div className={styles.perfCard}>
                  <h3>Memory Usage</h3>
                  <p>Minimal memory footprint with predictable allocation patterns</p>
                </div>
                <div className={styles.perfCard}>
                  <h3>CPU Overhead</h3>
                  <p>Low overhead runtime with transparent performance costs</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
