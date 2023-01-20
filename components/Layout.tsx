import dynamic from 'next/dynamic';
import Navigation from './Navigation';

const Footer = dynamic(() => import('./Footer'));

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      <main style={{ minHeight: '80vh' }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
