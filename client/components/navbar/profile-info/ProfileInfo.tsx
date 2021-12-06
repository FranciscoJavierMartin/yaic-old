import React from 'react';
import Image from 'next/image';

import styles from './ProfileInfo.module.scss';

export default function ProfileInfo() {
  return (
    <header className={styles.profileInfo}>
      <div className={styles.avatarContainer}>
        <Image
          src='https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces'
          alt='Profile avatar'
          layout='fixed'
          width={152}
          height={152}
          className={styles.avatar}
        />
      </div>
      <div className={styles.actions}>
        <h2>janedoe_</h2>
        <button>Follow</button>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span>164</span>
          <span>posts</span>
        </div>
        <div className={styles.stat}>
          <span>188</span>
          <span>followers</span>
        </div>
        <div className={styles.stat}>
          <span>206</span>
          <span>following</span>
        </div>
      </div>
      <p className={styles.info}>
        <strong>Jane Doe</strong>
        &nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        nulla suscipit error, dignissimos deserunt vitae. Earum corporis ex
        adipisci totam odio expedita aperiam, et iste, fugit quis ipsam sunt
        est.
      </p>
    </header>
  );
}
