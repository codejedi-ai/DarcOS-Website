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
            <h1 className={styles.title}>Darcy128 ISA Advantages</h1>
            <p className={styles.subtitle}>The theoretical benefits of 128-bit processor architecture</p>
          </header>

          <main className={styles.main}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Darcy128 ISA Benefits</h2>
              <div className={styles.featureGrid}>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🚀</div>
                  <h3>Massive Address Space</h3>
                  <p>
                    With 128-bit addressing, Darcy128 can theoretically address 
                    2^128 bytes of memory - far beyond any conceivable future 
                    memory requirements, enabling unprecedented scalability.
                  </p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>⚡</div>
                  <h3>Enhanced Precision</h3>
                  <p>
                    128-bit operations provide exceptional precision for 
                    scientific computing, cryptography, and high-precision 
                    mathematical operations that would be impossible with 
                    smaller word sizes.
                  </p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🔒</div>
                  <h3>Advanced Security</h3>
                  <p>
                    The massive address space provides natural protection 
                    against memory-based attacks, while 128-bit encryption 
                    keys offer virtually unbreakable security for 
                    cryptographic operations.
                  </p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🌐</div>
                  <h3>Future-Proof Design</h3>
                  <p>
                    Built on proven 32-bit MIPS foundation, Darcy128 
                    represents a theoretical evolution that could 
                    accommodate future computing demands we can't yet imagine.
                  </p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🧮</div>
                  <h3>Parallel Processing</h3>
                  <p>
                    The HIPS128 architecture enables theoretical exploration 
                    of massive parallel processing capabilities, pushing the 
                    boundaries of concurrent computation.
                  </p>
                </div>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>🎓</div>
                  <h3>Educational Value</h3>
                  <p>
                    Darcy128 serves as an excellent educational platform for 
                    understanding processor design trade-offs, energy 
                    constraints, and the theoretical limits of computing.
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
