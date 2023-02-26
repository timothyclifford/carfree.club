import Head from "next/head";
import Layout from "../components/layout";
import { PageTitle } from "../components/pageTitle";

export default function WhyCarFree() {
  return (
    <Layout>
      <Head>
        <title>Why live car free? - Car Free Club</title>
        <meta
          name="description"
          content="Helping people save money, get healthy and feel happier by not owning a car."
        />
      </Head>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-3xl text-center lg:py-16 lg:px-12">
          <PageTitle title="Why live car free?"></PageTitle>
          <p className="mb-4 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Under construction
          </p>
        </div>
      </section>
    </Layout>
  );
}
