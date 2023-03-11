import Head from "next/head";

type Props = {
  title: string;
  description: string;
  url: string;
};

export default function Meta(props: Props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={props.url} />
      <meta property="og:image" content="https://carfree.club/og.jpg" />
    </Head>
  );
}
