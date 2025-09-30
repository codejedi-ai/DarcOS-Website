import VantaBackground from '@/components/VantaBackground';
import Navbar from '@/components/Navbar';
import styles from '@/styles/about.module.css';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <VantaBackground />
      <div className={styles.page}>
        <div className={styles.content}>
          <header className={styles.hero}>
            <h1 className={styles.title}>Why I Built DarcOS</h1>
            <p className={styles.subtitle}>The story behind the theoretical processor architecture</p>
          </header>

          <main className={styles.main}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>The Inspiration</h2>
              <p className={styles.sectionBody}>
                DarcOS was born from a fascination with the theoretical limits of processor design. 
                While 128-bit processors remain impractical due to immense energy requirements, 
                I wanted to explore what such an architecture could look like and how it might 
                function. The project represents a bridge between academic curiosity and practical 
                understanding of computer architecture.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>The Challenge</h2>
              <p className={styles.sectionBody}>
                Traditional computer architecture education often focuses on existing, commercially 
                viable designs. But what about the theoretical frontiers? What happens when we 
                push beyond current limitations? DarcOS addresses this gap by providing a 
                tangible platform for exploring the Darcy128 ISA - a novel 128-bit instruction 
                set architecture built on the proven foundation of 32-bit MIPS.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>The Solution</h2>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <h3>Web-Based Accessibility</h3>
                  <p>
                    By implementing DarcOS as a web application, I made advanced processor 
                    architecture concepts accessible to anyone with a browser, removing 
                    barriers to learning and exploration.
                  </p>
                </div>
                <div className={styles.card}>
                  <h3>Educational Focus</h3>
                  <p>
                    DarcOS serves as an educational tool, demonstrating how theoretical 
                    concepts can be made tangible through interactive simulation, 
                    inspiring the next generation of computer scientists.
                  </p>
                </div>
                <div className={styles.card}>
                  <h3>Energy-Aware Design</h3>
                  <p>
                    The HIPS128 architecture acknowledges the energy constraints of 
                    128-bit processors while exploring their theoretical potential, 
                    providing realistic insights into processor design trade-offs.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>The Vision</h2>
              <p className={styles.sectionBody}>
                DarcOS represents more than just a theoretical exercise - it's a demonstration 
                of how modern web technologies can simulate complex systems, making advanced 
                computer architecture concepts accessible to students, researchers, and 
                enthusiasts worldwide. By exploring the boundaries of what's possible, 
                we gain deeper insights into what's practical.
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
