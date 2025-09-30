import { Link, useLocation } from 'ice';
import { useState, useEffect } from 'react';
import logo from '@/assets/logo.png';
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/features', label: 'Features' },
    { path: '/download', label: 'Download' },
    { path: '/admin', label: 'Admin' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoContainer}>
          <img src={logo} alt="DarcOS logo" className={styles.logoImage} />
          <span className={styles.logoText}>DarcOS</span>
        </Link>
        <div className={styles.navRight}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.path} className={styles.navItem}>
                <Link 
                  to={item.path} 
                  className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/documentation" className={styles.documentationBtn}>
            Documentation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
