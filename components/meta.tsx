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
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.url} />
      <meta property="og:image" content="https://carfree.club/og.jpg" />
      <meta
        property="og:image:secure_url"
        content="https://carfree.club/og.jpg"
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Car Free Club" />
    </Head>
  );
}
