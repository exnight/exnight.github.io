import fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

const POSTS_DIR = path.join(process.cwd(), 'blog');

const allPostFilenames = fs
  .readdirSync(POSTS_DIR)
  .filter((path) => /\.mdx?$/.test(path));

const isValid = (meta: Record<string, string> | undefined) => {
  return meta != null && meta.title != null && meta.publishedOn != null;
};

export const getPost = (filePath: string) => {
  const source = fs.readFileSync(path.join(POSTS_DIR, filePath)).toString();
  return serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
    parseFrontmatter: true,
  });
};

const allPosts = allPostFilenames.map((file) => getPost(file));

export const getValidPosts = async () => {
  const mdxAllPosts = await Promise.all(allPosts);
  const validPosts = mdxAllPosts.filter((post) => isValid(post.frontmatter));
  return {
    posts: validPosts,
    paths: validPosts.map((post) =>
      post.frontmatter!.title.toLowerCase().replaceAll(' ', '-')
    ),
  };
};
