import React from 'react';
import PostDetail from '../post-detail/PostDetail';
import styles from './Modal.module.scss';

export default function Modal() {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <PostDetail />
      </div>
    </div>
  );
}
