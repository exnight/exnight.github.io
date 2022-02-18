import Head from 'next/head';

interface HtmlHeadProps {
  title: string;
  description: string;
}

const HtmlHead = (props: HtmlHeadProps) => {
  return (
    <Head>
      <title>{props.title} | Leo W.</title>
      <meta name="description" content={props.description} />
    </Head>
  );
};

export default HtmlHead;
