import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import HtmlHead from '../../components/HtmlHead';
import components from '../../components/MDXComponents';
import { getPost, getValidPosts } from '../../util/mdx';

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
    <div className="w-4/5 lg:w-5/6 mx-auto mt-8 flex flex-col">
      <HtmlHead
        title={`${title}`}
        description="A dev blog alongside other random content"
      />
      <h1 className="text-4xl mb-4 self-center">{title}</h1>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const mdxPost = await getPost(`${params!.slug}.md`);
  return { props: { post: mdxPost }, revalidate: false };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { paths } = await getValidPosts();
  const staticPaths = paths.map((slug) => ({ params: { slug } }));

  return {
    paths: staticPaths,
    fallback: false,
  };
};

export default PostPage;
