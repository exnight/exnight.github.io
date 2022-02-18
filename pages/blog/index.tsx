import React from 'react';
import HtmlHead from '../../components/HtmlHead';

const Blog: React.FC = () => {
  return (
    <>
      <HtmlHead
        title="Blog"
        description="A dev blog alongside other random content"
      />
      <div className="text-4xl text-center">Work In Progress</div>
    </>
  );
};

export default Blog;
