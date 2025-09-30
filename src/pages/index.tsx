import logo from '@/assets/logo.png';
import VantaBackground from '@/components/VantaBackground';
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import styles from './index.module.css';

export default function IndexPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <Navbar />
      <VantaBackground />
      <div className={styles.app}>
        <header 
          className={styles.hero}
          style={{
            '--scroll-opacity': Math.min(scrollY / 500, 1),
            '--scroll-blur': Math.min(scrollY / 1000, 0.5)
          } as React.CSSProperties}
        >
          <img src={logo} alt="DarcOS logo" className={styles.logo} />
          <h1 className={styles.title}>DarcOS</h1>
          <p className={styles.tagline}>Device Agnostic Runtime Compatible Operating System</p>
          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href="#about">Learn More</a>
            <a className={styles.secondaryCta} href="#features">Explore Features</a>
          </div>
        </header>

        <main className={styles.main}>
          <section id="about" className={styles.section}>
            <h2 className={styles.sectionTitle}>What is DarcOS?</h2>
            <p className={styles.sectionLead}>
              DarcOS is a next-generation operating system focused on true portability and determinism. Built with
              <a href="https://student.cs.uwaterloo.ca/~cs241/wlp4/" target="_blank" rel="noopener noreferrer" className={styles.hyperlink}>WLP4P (Waterloo Language Plus Pointers Plus Procedures)</a>, it embraces a minimal, analyzable core while
              enabling modern systems capabilities through disciplined procedures and memory semantics.
            </p>
          </section>

          <section id="features" className={styles.section}>
            <h2 className={styles.sectionTitle}>Core Features</h2>
            <div className={styles.cards}>
              <div className={styles.card}>
                <h3>Deterministic Execution</h3>
                <p>
                  Predictable behavior and performance characteristics through 
                  WLP4P's strict semantics and controlled memory management.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Device Agnostic</h3>
                <p>
                  Runs identically across different hardware platforms without 
                  modification, enabling true portability and consistency.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Minimal Surface Area</h3>
                <p>
                  Small, analyzable kernel with only essential services, 
                  reducing complexity and attack surface.
                </p>
              </div>
            </div>
          </section>

          <section id="downloads" className={styles.section}>
            <h2 className={styles.sectionTitle}>Download DarcOS</h2>
            <div className={styles.downloadGrid}>
              <div className={styles.downloadCard}>
                <h3>Latest Release</h3>
                <p>DarcOS v0.1.0-alpha</p>
                <a href="#" className={styles.downloadBtn}>Download Now</a>
              </div>
              <div className={styles.downloadCard}>
                <h3>Source Code</h3>
                <p>Build from source</p>
                <a href="#" className={styles.downloadBtn}>View on GitHub</a>
              </div>
              <div className={styles.downloadCard}>
                <h3>Documentation</h3>
                <p>Learn how to use DarcOS</p>
                <a href="#" className={styles.downloadBtn}>Read Docs</a>
              </div>
            </div>
          </section>

          <section id="testimonials" className={styles.section}>
            <h2 className={styles.sectionTitle}>What People Say</h2>
            <div className={styles.testimonials}>
              <div className={styles.testimonial}>
                <p>"DarcOS represents a fundamental shift in how we think about operating systems. The deterministic approach is revolutionary."</p>
                <cite>- Dr. Sarah Chen, Systems Researcher</cite>
              </div>
              <div className={styles.testimonial}>
                <p>"Finally, an OS that prioritizes transparency and predictability. DarcOS makes systems programming enjoyable again."</p>
                <cite>- Marcus Rodriguez, Kernel Developer</cite>
              </div>
              <div className={styles.testimonial}>
                <p>"The device-agnostic design is exactly what the industry needs. DarcOS delivers on its promises."</p>
                <cite>- Prof. David Kim, Computer Science</cite>
              </div>
            </div>
          </section>

          <section id="philosophy" className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Philosophy</h2>
            <p className={styles.sectionBody}>
              We believe an OS should be transparent in cost, consistent in behavior, and approachable to reason
              about. DarcOS prioritizes explicit control and verifiability over opaque magic.
            </p>
          </section>

          <section id="wlp4-resources" className={styles.section}>
            <h2 className={styles.sectionTitle}>WLP4 Resources</h2>
            <div className={styles.resourceLinks}>
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