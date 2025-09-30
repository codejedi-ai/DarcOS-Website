import VantaBackground from '@/components/VantaBackground';
import Navbar from '@/components/Navbar';
import styles from '@/styles/download.module.css';

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <VantaBackground />
      <div className={styles.page}>
        <div className={styles.content}>
          <header className={styles.hero}>
            <h1 className={styles.title}>Access DarcOS</h1>
            <p className={styles.subtitle}>Web-based exploration of Darcy128 ISA</p>
          </header>

          <main className={styles.main}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Web Application</h2>
              <div className={styles.releaseCard}>
                <div className={styles.releaseInfo}>
                  <h3>DarcOS Web Platform</h3>
                  <p className={styles.releaseDate}>Available Now</p>
                  <p className={styles.releaseDesc}>
                    Access DarcOS directly in your web browser - no download required! 
                    Explore the Darcy128 ISA and HIPS128 processor architecture through 
                    interactive web simulation. Perfect for educational purposes and 
                    theoretical exploration.
                  </p>
                </div>
                <div className={styles.downloadActions}>
                  <a href="#features" className={styles.downloadBtn}>Explore Now</a>
                  <a href="#about" className={styles.releaseNotes}>Learn More</a>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>MIPS32 Assembler for Darcy128</h2>
              <div className={styles.releaseCard}>
                <div className={styles.releaseInfo}>
                  <h3>MIPS32-Assembler</h3>
                  <p className={styles.releaseDate}>Future Darcy128 ISA Tool</p>
                  <p className={styles.releaseDesc}>
                    The assembler for the future Darcy128 ISA! This MIPS32 assembler 
                    converts assembly language source code into machine code, supporting 
                    both standalone binary files and MERL (Module Entry Record Language) 
                    files for linking. Built as the foundation for the theoretical 
                    Darcy128 instruction set architecture.
                  </p>
                </div>
                <div className={styles.downloadActions}>
                  <a href="https://github.com/codejedi-ai/MIPS32-Assembler" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>View on GitHub</a>
                  <a href="https://github.com/codejedi-ai/MIPS32-Assembler" target="_blank" rel="noopener noreferrer" className={styles.releaseNotes}>Source Code</a>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>System Requirements</h2>
              <div className={styles.requirements}>
                <div className={styles.reqCard}>
                  <h3>Minimum Requirements</h3>
                  <ul>
                    <li>64-bit x86_64 processor</li>
                    <li>512 MB RAM</li>
                    <li>1 GB storage space</li>
                    <li>UEFI-compatible firmware</li>
                  </ul>
                </div>
                <div className={styles.reqCard}>
                  <h3>Recommended Requirements</h3>
                  <ul>
                    <li>64-bit x86_64 processor</li>
                    <li>2 GB RAM or more</li>
                    <li>4 GB storage space</li>
                    <li>UEFI-compatible firmware</li>
                    <li>Network connectivity</li>
                  </ul>
                </div>
                <div className={styles.reqCard}>
                  <h3>Supported Platforms</h3>
                  <ul>
                    <li>Intel x86_64</li>
                    <li>AMD x86_64</li>
                    <li>ARM64 (experimental)</li>
                    <li>RISC-V (planned)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Installation Methods</h2>
              <div className={styles.installMethods}>
                <div className={styles.methodCard}>
                  <h3>ISO Image</h3>
                  <p>Boot from USB or CD/DVD for testing and installation</p>
                  <div className={styles.methodSteps}>
                    <span>1. Download ISO</span>
                    <span>2. Create bootable media</span>
                    <span>3. Boot and install</span>
                  </div>
                  <a href="#" className={styles.methodBtn}>Download ISO</a>
                </div>
                <div className={styles.methodCard}>
                  <h3>Virtual Machine</h3>
                  <p>Run DarcOS in a virtualized environment</p>
                  <div className={styles.methodSteps}>
                    <span>1. Download VM image</span>
                    <span>2. Import to VM software</span>
                    <span>3. Start and explore</span>
                  </div>
                  <a href="#" className={styles.methodBtn}>Download VM</a>
                </div>
                <div className={styles.methodCard}>
                  <h3>Source Code</h3>
                  <p>Build DarcOS from source for development</p>
                  <div className={styles.methodSteps}>
                    <span>1. Clone repository</span>
                    <span>2. Install build tools</span>
                    <span>3. Compile and run</span>
                  </div>
                  <a href="#" className={styles.methodBtn}>View Source</a>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Development Builds</h2>
              <div className={styles.devBuilds}>
                <div className={styles.buildCard}>
                  <h3>Nightly Builds</h3>
                  <p>Latest development builds with newest features</p>
                  <div className={styles.buildInfo}>
                    <span className={styles.buildStatus}>Unstable</span>
                    <span className={styles.buildDate}>Updated daily</span>
                  </div>
                  <a href="#" className={styles.buildBtn}>Download Nightly</a>
                </div>
                <div className={styles.buildCard}>
                  <h3>Beta Releases</h3>
                  <p>Pre-release versions for testing new features</p>
                  <div className={styles.buildInfo}>
                    <span className={styles.buildStatus}>Beta</span>
                    <span className={styles.buildDate}>Updated weekly</span>
                  </div>
                  <a href="#" className={styles.buildBtn}>Download Beta</a>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Getting Help</h2>
              <div className={styles.help}>
                <div className={styles.helpCard}>
                  <h3>Installation Guide</h3>
                  <p>Detailed step-by-step installation instructions</p>
                  <a href="#" className={styles.helpLink}>Read Guide →</a>
                </div>
                <div className={styles.helpCard}>
                  <h3>Troubleshooting</h3>
                  <p>Common issues and their solutions</p>
                  <a href="#" className={styles.helpLink}>Troubleshoot →</a>
                </div>
                <div className={styles.helpCard}>
                  <h3>Community Support</h3>
                  <p>Get help from the DarcOS community</p>
                  <a href="#" className={styles.helpLink}>Join Community →</a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
