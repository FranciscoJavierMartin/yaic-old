import React from 'react';
import styles from './Comments.module.scss';

export default function CommentSemantic() {
  return (
    <div className={styles.comments}>
      {[1, 2, 3, 4, 5].map((index) => (
        <div className={styles.comment} key={index}>
          <a href='#' className={styles.avatar}>
            <img
              src='https://www.w3schools.com/howto/img_avatar.png'
              alt='Avatar'
            />
          </a>
          <div className={styles.content}>
            <a href='#' className={styles.author}>
              John Doe
            </a>
            <div className={styles.metadata}>
              <span className={styles.date}>37 min</span>
            </div>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ab
              quaerat mollitia placeat similique magni perferendis voluptates
              officia explicabo deserunt nemo est velit sint blanditiis, cum
              rerum? Saepe, numquam perferendis?
            </div>
            <div className={styles.actions}>
              <a className={styles.reply}>Reply</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
