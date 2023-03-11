import Layout from "../components/layout";
import Meta from "../components/meta";
import { PageTitle } from "../components/pageTitle";

export default function OurStory() {
  return (
    <Layout>
      <Meta
        title="Our Story - Car Free Club"
        description="A bit about us and why we stared Car Free Club"
        url="https://carfree.club/our-story"
      ></Meta>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-3xl text-center lg:py-16 lg:px-12">
          <PageTitle title="Our story"></PageTitle>
          <p className="mb-4 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            We used to be exactly where you are now. Feeling like there was
            something a bit wrong with how much time and money our cars were
            taking from us, but at the same time feeling uncertain about if or
            how we could possibly live without them.
          </p>
          <p className="mb-4 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            That was over 10 years ago. Since then, we&apos;ve sold our cars and
            we get around mostly on foot or by bike, with a few trips using
            public transport and car sharing from time to time.
          </p>
          <p className="font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            It&apos;s easily the best decision we ever made for our finances,
            health &amp; happiness.
          </p>
        </div>
      </section>
    </Layout>
  );
}
