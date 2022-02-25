import dynamic from 'next/dynamic';
import Navigation from './Navigation';

const Footer = dynamic(() => import('./Footer'));

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      <main style={{ minHeight: '80vh' }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
