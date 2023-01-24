// import React from 'react';
import styles from './NotFoundPage.module.css';
import image from './pulp-fiction-john-travolta.gif';

const NotFoundPage = () => {
  return (
    <>
      <h2 className={styles.subtitle}>Opsss! Not Found page</h2>
      <div className={styles.div}>
        <img className={styles.img} src={image} alt="not found" />
      </div>
    </>
  );
};

export default NotFoundPage;
