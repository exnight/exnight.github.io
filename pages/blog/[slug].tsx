import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';
import HtmlHead from '../../components/HtmlHead';
import { allPostFilePaths, getPost } from '../../util/mdx';

interface PostProps {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const PostPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  return (
    <>
      <Post mdxSource={post} />
    </>
  );
};

const Post: React.FC<PostProps> = ({ mdxSource }) => {
  const title = mdxSource.frontmatter!.title;
  return (
    <>
      <HtmlHead
        title={`${title}`}
        description="A dev blog alongside other random content"
      />
      <h1>{title}</h1>
      <MDXRemote {...mdxSource} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const mdxPost = await getPost(`${params!.slug}.md`);
  return { props: { post: mdxPost }, revalidate: false };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPostFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
