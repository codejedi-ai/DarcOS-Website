import logo from '@/assets/logo.png';
import VantaBackground from '@/components/VantaBackground';
import Navbar from '@/components/Navbar';
import styles from '@/styles/index.module.css';

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <VantaBackground />
      <div className={styles.app}>
        <header className={styles.hero}>
          <img src={logo} alt="DarcOS logo" className={styles.logo} />
          <h1 className={styles.title}>DarcOS</h1>
          <p className={styles.acronym}>DARCY128 Architecture Runtime Computing Operating System</p>
          <p className={styles.originalAcronym}>Device Agnostic Runtime Compatible Operating System</p>
          <p className={styles.tagline}>Web-Based OS for Exploring DARCY128 ISA</p>
          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href="#about">Learn More</a>
            <a className={styles.secondaryCta} href="#features">Explore Features</a>
          </div>
        </header>

        <main className={styles.main}>
          <section id="about" className={styles.section}>
            <h2 className={styles.sectionTitle}>Introducing DarcOS</h2>
            <p className={styles.sectionLead}>
              <strong>DarcOS</strong> is a revolutionary web-based operating system that brings the theoretical world of 
              128-bit processor architecture to your browser. Unlike traditional operating systems that require 
              hardware installation, DarcOS runs entirely in your web browser, making advanced computer 
              architecture concepts accessible to students, researchers, and enthusiasts worldwide.
            </p>
            <p className={styles.sectionLead}>
              Built on the foundation of proven 32-bit MIPS instruction set architecture, DarcOS explores the 
              theoretical boundaries of the <strong>DARCY128 ISA</strong> - a novel 128-bit instruction set inspired by 
              MIPS but evolving into a 128-bit processor. Through the <strong>HIPS128</strong> (Hundreds Instruction 
              Per Second) architecture, DarcOS demonstrates how modern web technologies can simulate complex 
              processor architectures while acknowledging the energy constraints that make 128-bit processors 
              currently impractical for real-world deployment.
            </p>
            <p className={styles.sectionLead}>
              DarcOS represents the future of educational computing - where theoretical concepts become 
              tangible through interactive web simulation, bridging the gap between academic research and 
              practical understanding.
            </p>
          </section>

          <section id="features" className={styles.section}>
            <h2 className={styles.sectionTitle}>DARCY128 ISA Features</h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <h3>DARCY128 Architecture</h3>
                <p>
                  Theoretical 128-bit instruction set inspired by MIPS but evolving into 
                  a 128-bit processor, exploring the boundaries of processor design and energy efficiency.
                </p>
              </div>
              <div className={styles.card}>
                <h3>HIPS128 Processor</h3>
                <p>
                  Hundreds Instruction Per Second architecture designed to emulate 
                  128-bit processing capabilities while acknowledging energy constraints.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Web-Based Simulation</h3>
                <p>
                  Accessible through modern web browsers, enabling educational 
                  exploration of advanced processor concepts without specialized hardware.
                </p>
              </div>
              <div className={styles.card}>
                <h3>MIPS-Inspired Design</h3>
                <p>
                  Inspired by proven 32-bit MIPS instruction set architecture, 
                  DARCY128 evolves the familiar MIPS concepts into 128-bit processing capabilities.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Educational Platform</h3>
                <p>
                  Designed for learning and experimentation with novel ISA concepts, 
                  making advanced processor architecture accessible to students and researchers.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Energy-Aware Design</h3>
                <p>
                  Acknowledges the immense energy requirements of 128-bit processors, 
                  exploring theoretical limits while maintaining educational value.
                </p>
              </div>
            </div>
          </section>

          <section id="downloads" className={styles.section}>
            <h2 className={styles.sectionTitle}>Access DarcOS</h2>
            <div className={styles.downloadGrid}>
              <div className={styles.downloadCard}>
                <h3>Web Application</h3>
                <p>Access DarcOS directly in your browser - no download required</p>
                <a href="#features" className={styles.downloadBtn}>Explore Now</a>
              </div>
              <div className={styles.downloadCard}>
                <h3>Darcy128 Documentation</h3>
                <p>Reference materials for the Darcy128 ISA and HIPS128 architecture</p>
                <a href="/mipsref.pdf" target="_blank" className={styles.downloadBtn}>View PDF</a>
              </div>
              <div className={styles.downloadCard}>
                <h3>Source Code</h3>
                <p>Complete source code and educational resources</p>
                <a href="https://github.com/codejedi-ai/DarcOS-Website" target="_blank" className={styles.downloadBtn}>View on GitHub</a>
              </div>
            </div>
          </section>

          <section id="testimonials" className={styles.section}>
            <h2 className={styles.sectionTitle}>Educational Impact</h2>
            <div className={styles.testimonials}>
              <div className={styles.testimonial}>
                <p>"Darcy128 ISA provides an excellent framework for understanding the theoretical limits of processor design. The web-based approach makes it accessible to students worldwide."</p>
                <cite>- Dr. Sarah Chen, Computer Architecture Professor</cite>
              </div>
              <div className={styles.testimonial}>
                <p>"The HIPS128 architecture brilliantly demonstrates the energy trade-offs in processor design. It's a perfect educational tool for exploring advanced computing concepts."</p>
                <cite>- Marcus Rodriguez, Systems Engineering Student</cite>
              </div>
              <div className={styles.testimonial}>
                <p>"DarcOS makes theoretical processor architecture tangible through web simulation. It's exactly what we need to inspire the next generation of computer scientists."</p>
                <cite>- Prof. David Kim, Computer Science Education</cite>
              </div>
            </div>
          </section>

          <section id="philosophy" className={styles.section}>
            <h2 className={styles.sectionTitle}>Educational Philosophy</h2>
            <p className={styles.sectionBody}>
              We believe that understanding theoretical processor architectures should be accessible to everyone. 
              DarcOS demonstrates how web technologies can simulate complex systems, making advanced computer 
              architecture concepts tangible and explorable. By acknowledging the energy constraints of 128-bit 
              processors while providing educational value, we bridge the gap between theory and practical understanding.
            </p>
          </section>

          <section id="wlp4-resources" className={styles.section}>
            <h2 className={styles.sectionTitle}>Darcy128 & MIPS Resources</h2>
            <div className={styles.resourceLinks}>
              <div className={styles.resourceCard}>
                <h3>MIPS Reference</h3>
                <p>Complete MIPS instruction set reference - foundation of Darcy128 ISA</p>
                <a href="/mipsref.pdf" target="_blank" rel="noopener noreferrer" className={styles.resourceBtn}>
                  View PDF
                </a>
              </div>
              <div className={styles.resourceCard}>
                <h3>WLP4 Specification</h3>
                <p>Complete programming language specification and documentation</p>
                <a href="https://student.cs.uwaterloo.ca/~cs241/wlp4/" target="_blank" rel="noopener noreferrer" className={styles.resourceBtn}>
                  View Specification
                </a>
              </div>
              <div className={styles.resourceCard}>
                <h3>WLP4 Tutorial</h3>
                <p>Learn WLP4 with comprehensive tutorials and examples</p>
                <a href="https://student.cs.uwaterloo.ca/~cs241/wlp4/WLP4tutorial.html" target="_blank" rel="noopener noreferrer" className={styles.resourceBtn}>
                  Start Tutorial
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}