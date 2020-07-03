import React from 'react';
import { Container } from 'reactstrap';

import styles from './Footer.module.scss';

const Footer = () => {

  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.authors}>
          <span>Created by <span className={styles.authors__name}>Egor Dyachenko</span> & <span className={styles.authors__name}>Evgeny Ishmenev</span></span>
        </div>
      </Container>
    </div>
  )
}

export default Footer;