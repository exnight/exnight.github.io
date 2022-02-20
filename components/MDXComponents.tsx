const components = {
  h1: (props: any) => <h1 className="my-4 text-2xl">{props.children}</h1>,
  h2: (props: any) => <h2 className="my-4 text-xl">{props.children}</h2>,
  p: (props: any) => <p className="my-4 text-md">{props.children}</p>,
  pre: (props: any) => (
    <pre className="my-4 text-2xl self-center">
      <code>{props.children}</code>
    </pre>
  ),
};

export default components;
