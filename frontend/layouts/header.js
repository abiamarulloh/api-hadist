import styles from './layouts.module.css';
import Link from 'next/link'

export default function header() {
    return (
      <>
        <div className={styles.header}>
          <ul className={styles.ul}>
            <li className={styles.liLeft}>
              <Link href="/">
                <a className={styles.headerLogo}>HADIST</a>
              </Link>
            </li>
            <li className={styles.liRight}>
              <Link href="/contact">
                <a className={styles.link}>Contact Us</a>
              </Link>
            </li>
            <li className={styles.liRight}>
              <Link href="/profile">
                <a className={styles.link}>Profile</a>
              </Link>
            </li>
            <li className={styles.liRight}>
              <Link href="/">
                <a className={styles.link}>Home</a>
              </Link>
            </li>
          </ul>
        </div>
      </>
    )
}