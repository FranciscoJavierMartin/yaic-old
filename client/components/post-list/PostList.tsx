import React from 'react';
import Post from '@/components/post/Post';
import styles from './PostList.module.scss';

export default function PostList() {
  return (
    <div className={styles.postList} data-testid='post-list'>
      {[1, 2, 3].map((index) => (
        <Post key={index} />
      ))}
    </div>
  );
}
