import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Car Free Club</title>
        <meta
          name="description"
          content="Helping people save money, get healthy and feel happier by living without a car"
        />
      </Head>
      I don't feel safe riding a bike I'm not fit enough I'll just use an EV I
      need a car to transport my shopping I need to drive long distances
    </Layout>
  );
}
