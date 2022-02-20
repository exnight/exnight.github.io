import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import HtmlHead from '../../components/HtmlHead';
import { getValidPosts } from '../../util/mdx';

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
      <div className="w-4/5 lg:w-5/6 mx-auto mt-16 flex flex-col md:grid md:grid-cols-5">
        <div className="col-span-3">
          <h1 className="text-4xl text-blue-600 font-bold mb-12">
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
                      <p className="italic mb-2">
                        {parseDate(meta.publishedOn)}
                      </p>
                      <p className="">{meta.summary}</p>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-2 col-start-4">
          <p className="text-2xl hidden">Under Construction</p>
        </div>
      </div>
    </>
  );
};

const daysOfWeek: Record<number, string> = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
};

const months: Record<number, string> = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

const parseDate = (rawDate: string) => {
  const date = new Date(rawDate);
  return `${daysOfWeek[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { posts } = await getValidPosts();
  const sortedPosts = posts.sort((a, b) =>
    a.frontmatter!.publishedOn > b.frontmatter!.publishedOn ? -1 : 1
  );

  return { props: { posts: sortedPosts } };
};

export default Blog;
