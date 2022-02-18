import React from 'react';
import Footer from './Footer';
import styles from './Layout.module.css';
import Navigation from './Navigation';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
