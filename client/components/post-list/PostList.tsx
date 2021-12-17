import React from 'react';
import styles from './PostList.module.scss';

export default function PostList() {
  return (
    <div className={styles.postList} data-testid='post-list'>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
        <div key={index} className={styles.post}>
          image
        </div>
      ))}
    </div>
  );
}
