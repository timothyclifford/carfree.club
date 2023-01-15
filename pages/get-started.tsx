import Head from "next/head";
import Layout from "../components/layout";

export default function GetStarted() {
  return (
    <Layout>
      <Head>
        <title>Get started - Car Free Club</title>
        <meta
          name="description"
          content="Helping people save money, get healthy and feel happier by not owning a car."
        />
      </Head>
      <section className="bg-white dark:bg-gray-900"></section>
    </Layout>
  );
}
