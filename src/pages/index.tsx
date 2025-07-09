import { useState } from 'react';
import logo from '@/assets/logo.png';
import VantaBackground from '@/components/VantaBackground';
import styles from './index.module.css';

export default function IndexPage() {
  const [count, setCount] = useState(1);
  const updateCount = () => setCount((count) => count + 1);

  return (
    <>
      <VantaBackground />
      <div className={styles.app}>
        <div className={styles.content}>
          <header>
            <img src={logo} alt="logo" />
            <p>
              Welcome to the Cyber Realm
            </p>
          </header>
          <main>
            <button className={styles.button} type="button" onClick={updateCount}>
              👍🏻 {count}
            </button>
            <p>
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Learn React
              </a>
              {' | '}
              <a
                href="https://v3.ice.work/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Learn ice.js
              </a>
            </p>
          </main>
        </div>
      </div>
    </>
  );
}
