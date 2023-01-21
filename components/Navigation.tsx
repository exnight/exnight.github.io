import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <div className="my-4 pb-4 border-b">
      <div className="justify-items-center items-center mx-auto sm:w-4/5 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default Navigation;
