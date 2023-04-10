import { Accordion } from "flowbite-react";
import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";
import Meta from "../components/meta";

export default function Home() {
  return (
    <Layout>
      <Meta
        title="Car Free Club"
        description="Helping people save money, get healthy and feel happier by going car free."
        url="https://carfree.club/"
      ></Meta>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Break up with your car
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Save money, fight climate change &amp; give traffic the middle
              finger.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Show me how
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <Link
              href="/why-live-car-free"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              But why?
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="/mobility.png"
              alt="Car Free Club"
              width={1024}
              height={531}
            />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We&apos;re here to set you free
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Most of us drive everywhere without realising the impact this has
              on our bank balance, health, community and the environment.
              <br />
              <br />
              Car Free Club is here to help you live a life free of traffic
              jams, parking tickets and road rage.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">
                How much can I save?
              </h3>
              <p className="mb-8 space-y-4 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Our online tool calculates how much you could save by not owning
                a car.
              </p>
              <Link
                href="/car-free-calculator"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Show me the money
              </Link>
            </div>
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">
                How do I get started?
              </h3>
              <p className="mb-8 space-y-4 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                It&apos;s easier than you think and there&apos;s lots of little
                changes you can try as a first step.
              </p>
              <Link
                href="/get-started"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Let&apos;s do this
              </Link>
            </div>
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">
                Are cars really that bad?
              </h3>
              <p className="mb-8 space-y-4 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Short answer, yes. A world with less cars is possible and has a
                range of benefits.
              </p>
              <Link
                href="/why-live-car-free"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Tell me more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              What&apos;s holding you back?
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              The idea of not owning a car can be scary. Here&apos;s a few of
              the concerns we usually hear from people, along with suggestions
              to help deal with each.
            </p>
          </div>
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>
                Are you saying I should never drive?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Not at all.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Cars are very convenient for some tasks. At the same time
                  though, there&apos;s many tasks cars aren&apos;t really
                  necessary for. How many times have you driven somewhere which
                  would have taken you a short time to walk?
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  By owning a car, we&apos;re encouraged to drive everywhere by
                  default, rather than deciding based on what we&apos;re doing.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Not owning a car on the other hand, allows us to be more
                  flexible with our transport choices, while saving us a bunch
                  of money because we&apos;re only paying for a car when we
                  actually need it.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                How do I do my grocery shopping?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  There&apos;s a number of alternatives which will save you a
                  bunch of time and money.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Walking to the grocery store is a great way to get exercise
                  and stay healthy. It is also a cost-effective way to travel,
                  as there is no need to pay for fuel or parking. You also
                  don&apos;t have to sit in traffic or battle for a parking
                  spot.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  If you have a big family or a lot to buy, walking may be hard.
                  Instead, you could doing your grocery shopping online, from
                  the comfort of your couch and have this delivered on the same
                  or next day. This is especially convenient for people who have
                  busy schedules or limited mobility, as it eliminates the need
                  to travel to the store and carry heavy bags of groceries.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  For people interested in riding a bike, cargo bikes offer a
                  convenient way to get around quickly while also carrying large
                  amounts of luggage.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  If none of the above are valid options for you, car-sharing
                  may be a worth. You get all the benefits of a car, but only
                  pay for it when you actually need it.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                I need a car to keep my family safe.
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  This is a common misconception. Cars are one of the leading
                  causes of death worldwide.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Public transport, riding a bike or walking are all
                  statistically safer forms of transport due to the fact that
                  car accidents generally occur at high speeds which are more
                  likely to be fatal.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  The only thing which will increase the safety of your family
                  is decreasing your risk of being involved in a car accident.
                  The only way to do this is by reducing your dependence on your
                  car.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                What about when I go on holiday?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  This is when it makes perfect sense to hire a car. If
                  you&apos;re going camping or off-road - there&apos;s a number
                  of online options for renting camper vans and RVs.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Depending on where you live, a train or a bus may be an option
                  for getting you there too.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  The bottom line is, owning a car can cost tens of thousands of
                  dollars a year. If you had this much extra money - every year
                  - where would you go on holiday?
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Can&apos;t I just buy an electic car?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Electric cars do have a reduced environmental impact compared
                  to combustion engines, but these will not solve the other
                  problems cars cause.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Traffic will continue getting worse. Noise pollution will
                  continue. Cars will continue killing and injuring humans and
                  wildlife unnecessarily. We will still need to sacrifice huge
                  amounts of public space for parking and roads.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  To solve these problems, it&apos;s not enough for everyone to
                  buy an EV, there needs to be a fundamental shift in how we
                  think about and prioritise our transport systems.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                But my car is my pride &amp; joy!
              </Accordion.Title>
              <Accordion.Content>
                <p className="text-gray-500 dark:text-gray-400">
                  Cars can be convenient (when you&apos;re not sitting in
                  traffic), but our obsession with them is negatively impacting
                  the environment, our health and the livability of our cities.
                  By reducing our dependence on cars and promoting alternative
                  modes of transportation, we can create more sustainable,
                  healthy, and happy communities.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                I&apos;m not fit enough to walk places or ride a bike.
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Maybe not at the moment. But by increasing the amount you walk
                  or ride gradually, your fitness will improve and you&apos;ll
                  be travelling larger distances in no time.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  The long term health benefits of a more active lifestyle will
                  be significant.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            {/* <Accordion.Panel>
              <Accordion.Title>
                I don&apos;t feel safe riding a bike.
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  This is the single biggest factor preventing more people from
                  jumping on their bike more often.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Unfortunately our roads have been designed with only cars in
                  mind. This is changing slowly but the more people riding bikes
                  and the more people advocating for safer infrastructure for
                  active transport, the quicker this change will move.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Until we&apos;ve reached a stage where people can ride a bike
                  without fear of being hit by someone driving distracted or
                  dangerously, stick to the safest routes and try to plan ahead
                  to ensure you&apos;re avoiding any especially dangerous roads.
                </p>
              </Accordion.Content>
            </Accordion.Panel> */}
          </Accordion>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Don&apos;t just take our word for it
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Hundreds of people have already made the switch to living car
              free.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div className="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <div className="flex items-center mb-4 space-x-4">
                <Image
                  className="w-16 h-16 rounded-full"
                  src="/profile-1-250.jpg"
                  alt="Graeme Clifford Headshot"
                  width={250}
                  height={250}
                />
                <div className="space-y-1 font-medium dark:text-white">
                  <p>
                    Graeme Clifford
                    <time
                      dateTime="2014-08-16 19:00"
                      className="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Car free since 2020
                    </time>
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-1">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  It&apos;s changed my life
                </h3>
              </div>
              <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
                At first I was really skeptical. I couldn&apos;t imagine a world
                where I didn&apos;t own a car but after a week or two I
                couldn&apos;t believe how easy it was and how much my life had
                improved.
              </p>
            </div>
            <div className="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <div className="flex items-center mb-4 space-x-4">
                <Image
                  className="w-16 h-16 rounded-full"
                  src="/profile-2-250.jpg"
                  alt="Samantha Jackson Headshot"
                  width={250}
                  height={250}
                />
                <div className="space-y-1 font-medium dark:text-white">
                  <p>
                    Samantha Jackson
                    <time
                      dateTime="2014-08-16 19:00"
                      className="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Car free since 2017
                    </time>
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-1">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  I don&apos;t miss the traffic
                </h3>
              </div>
              <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
                I used to hate my daily commute into the city. The traffic
                stressed me out and I was wasting 10+ hours a week sitting there
                doing nothing.
              </p>
            </div>
            <div className="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <div className="flex items-center mb-4 space-x-4">
                <Image
                  className="w-16 h-16 rounded-full"
                  src="/profile-3-250.jpg"
                  alt="Malo Edwards Headshot"
                  width={250}
                  height={250}
                />
                <div className="space-y-1 font-medium dark:text-white">
                  <p>
                    Malo Schnauser
                    <time
                      dateTime="2014-08-16 19:00"
                      className="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Car free since 2012
                    </time>
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-1">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  I&apos;ve saved so much money
                </h3>
              </div>
              <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
                I didn&apos;t realise my car was costing me so much money. When
                adding up what I now pay for public transport, car sharing and
                taxis, I&apos;m still much better off each month.
              </p>
            </div>
            <div className="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <div className="flex items-center mb-4 space-x-4">
                <Image
                  className="w-16 h-16 rounded-full"
                  src="/profile-4-250.jpg"
                  alt="Miles Bolt Headshot"
                  width={250}
                  height={250}
                />
                <div className="space-y-1 font-medium dark:text-white">
                  <p>
                    Bonnie Edwards
                    <time
                      dateTime="2014-08-16 19:00"
                      className="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Car free since 2022
                    </time>
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-1">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  I&apos;m fitter than ever
                </h3>
              </div>
              <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
                Now that I walk or ride most places, I&apos;ve lost so much
                weight and I&apos;m feeling healthier than ever. I love being
                outdoors more often, surrounded by nature and fresh air.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-white dark:bg-gray-900">
        <div className="pt-8 pb-16 px-4 mx-auto max-w-screen-xl lg:pt-16 lg:pb-32 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
              Sign up for our newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                We care about the protection of your data.
                <Link
                  href="#"
                  className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read our Privacy Policy
                </Link>
                .
              </div>
            </form>
          </div>
        </div>
      </section> */}
    </Layout>
  );
}
