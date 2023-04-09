import Layout from "../components/layout";
import Meta from "../components/meta";
import { PageTitle } from "../components/pageTitle";

export default function GetStarted() {
  return (
    <Layout>
      <Meta
        title="Get Started - Car Free Club"
        description="Quick and easy ways to start reducing your car dependency and saving."
        url="https://carfree.club/get-started"
      ></Meta>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-3xl text-center lg:py-16 lg:px-12">
          <PageTitle title="Get Started"></PageTitle>
          <p className="mb-4 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            ...
          </p>
        </div>
      </section>
    </Layout>
  );
}
