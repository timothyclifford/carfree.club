import Layout from "../components/layout";
import Meta from "../components/meta";
import { PageTitle } from "../components/pageTitle";

export default function WhyCarFree() {
  return (
    <Layout>
      <Meta
        title="Why Live Car Free - Car Free Club"
        description="Reasons you should consider living a car free life."
        url="https://carfree.club/why-live-car-free"
      ></Meta>
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
