import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React from 'react';
import HtmlHead from '../../components/HtmlHead';
import { allPosts } from '../../util/mdx';

interface frontmatter {
  title: string;
  summary: string;
  publishedOn: string;
}

const Blog: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <>
      <HtmlHead
        title="Blog"
        description="A dev blog alongside other random content"
      />
      <div className="w-4/5 flex flex-col md:grid md:grid-cols-5">
        <div className="col-span-3">
          <h1 className="text-4xl text-blue-700 font-bold mb-12">
            Recent Posts
          </h1>
          <ul>
            {posts.map((post: any) => {
              const meta: frontmatter = post.frontmatter;
              const title = meta.title;
              return (
                <li key={title} className="pb-4 my-8">
                  <Link
                    href={`/blog/${title.toLowerCase().replaceAll(' ', '-')}`}
                  >
                    <a>
                      <h2 className="text-2xl font-bold mb-2">{title}</h2>
                      <p>Published on: {parseDate(meta.publishedOn)}</p>
                      <p>{meta.summary}</p>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-2 col-start-4">
          Other functions are under construction
        </div>
      </div>
    </>
  );
};

const parseDate = (rawDate: string) => {
  return new Date(rawDate).toDateString();
};

export const getStaticProps: GetStaticProps = async (context) => {
  const mdxAllPosts = await Promise.all(allPosts);
  const validPosts = mdxAllPosts
    .filter((post) => {
      const meta = post.frontmatter;
      return meta != null && meta.title != null;
    })
    .sort((a, b) =>
      a.frontmatter!.publishedOn > b.frontmatter!.publishedOn ? -1 : 1
    );

  return { props: { posts: validPosts } };
};

export default Blog;
