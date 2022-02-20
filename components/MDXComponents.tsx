const components = {
  h1: (props: any) => (
    <h1 className="text-2xl text-red-500">{props.children}</h1>
  ),
  p: (props: any) => <p className="my-4 text-xl">{props.children}</p>,
};

export default components;
