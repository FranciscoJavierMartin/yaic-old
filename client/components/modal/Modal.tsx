import React from 'react';
import Image from 'next/image';
import styles from './Modal.module.scss';
import CommentSemantic from '../comments/Comments';

export default function Modal() {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <article className={styles.post}>
          <Image
            src='https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            layout='intrinsic'
            height={550}
            width={550}
          />
          <CommentSemantic />
        </article>
      </div>
    </div>
  );
}