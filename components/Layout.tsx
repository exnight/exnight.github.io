import Footer from './Footer';
import Navigation from './Navigation';

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
