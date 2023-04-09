import Layout from "../components/layout";
import Meta from "../components/meta";
import { PageTitle } from "../components/pageTitle";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Meta
        title="Privacy Policy - Car Free Club"
        description="The Car Free Club website privacy policy."
        url="https://carfree.club/privacy-policy"
      ></Meta>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-3xl text-center lg:py-16 lg:px-12">
          <PageTitle title="Privacy Policy"></PageTitle>
          <p className="mb-4 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            ...
          </p>
        </div>
      </section>
    </Layout>
  );
}
