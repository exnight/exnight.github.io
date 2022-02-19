import fs from 'fs';
import path from 'path';
import rehypeKatex from 'rehype-katex';
import { serialize } from 'next-mdx-remote/serialize';
import remarkMath from 'remark-math';

export const POSTS_DIR = path.join(process.cwd(), 'blog');

export const allPostFilePaths = fs
  .readdirSync(POSTS_DIR)
  .filter((path) => /\.mdx?$/.test(path));

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

export const allPosts = allPostFilePaths.map((file) => getPost(file));
