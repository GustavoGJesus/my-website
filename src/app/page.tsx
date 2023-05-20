import { Card } from 'components/card';

import styles from '../styles/home.module.css';

import '../styles/global.css';

import Profile from '../images/profile.png';

import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src={Profile}
          alt=""
          className={styles.imgContainer}
          width={200}
          height={200}
        />
        <h1 className={styles.title}>Gustavo Gomes</h1>
        <h2 className={styles.description}>
          Front-End Engineer <span style={{ color: '#6443ba' }}>|</span> Web3
          Engineer
        </h2>
      </div>
      <Card />
    </div>
  );
}
