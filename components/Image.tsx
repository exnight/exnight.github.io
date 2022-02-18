import NextImage, { ImageLoaderProps } from 'next/image';

const customLoader = ({ src, width }: ImageLoaderProps) => {
  const [path, extension] = src.split('.');
  return `${path}-${width}.${extension}`;
};

const Image = (props: any) => {
  return <NextImage loader={customLoader} {...props} />;
};

export default Image;
