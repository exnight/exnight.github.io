import Head from 'next/head';

interface HtmlHeadProps {
  title: string;
  description: string;
}

const HtmlHead = (props: HtmlHeadProps) => {
  const siteTitle = `${props.title} | Leo W.`;
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={props.description} />
    </Head>
  );
};

export default HtmlHead;
