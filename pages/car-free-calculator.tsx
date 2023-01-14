import Head from "next/head";
import Header from "../components/header";
import Layout from "../components/layout";

export default function CarFreeCalculator() {
  return (
    <Layout>
      <Head>
        <title>Car Free Calculator - Car Free Club</title>
        <meta
          name="description"
          content="Helping people save money, get healthy and feel happier by not owning a car."
        />
      </Head>
      <Header></Header>
      <section className="bg-white dark:bg-gray-900"></section>
    </Layout>
  );
}
