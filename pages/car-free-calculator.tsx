import Head from "next/head";
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
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Coming soon
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Well this is embarassing... We're just getting started, check back
            soon for updates!
          </p>
        </div>
      </section>
    </Layout>
  );
}
