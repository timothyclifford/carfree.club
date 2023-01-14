import { Accordion } from "flowbite-react";
import Head from "next/head";
import Header from "../components/header";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Car Free Club</title>
        <meta
          name="description"
          content="Helping people save money, get healthy and feel happier by not owning a car."
        />
      </Head>
      <Header></Header>
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
            <a
              href="#"
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
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              But why?
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/mobility.png" alt="Car Free Club" />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We've declared war on car addiction
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Most of us drive everywhere without realising the impact it's
              having on our bank balance, long term health and wider community.
              We're here to show you the alternative - a life free from traffic
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
              <a
                href="#"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Show me the money
              </a>
            </div>
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">
                How do I get started?
              </h3>
              <p className="mb-8 space-y-4 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                It's easier than you think and there's lots of little changes
                you can try as a first step.
              </p>
              <a
                href="#"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Let's do this
              </a>
            </div>
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">
                Are cars really that bad?
              </h3>
              <p className="mb-8 space-y-4 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Short answer, yes. A world with less cars is possible and has a
                range of benefits.
              </p>
              <a
                href="#"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                OK I'm interested...
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              What's holding you back?
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              The idea of not owning a car can be scary. Here's a few of the
              typical concerns we hear from people, along with a few suggestions
              on how to tackle.
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
                  though, there's many tasks cars aren't really necessary for.
                  How many times have you driven somewhere which would have
                  taken you a short time to walk?
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  By owning a car, we're encouraged to drive everywhere by
                  default, rather than deciding based on what we're doing.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Not owning a car on the other hand, allows us to be more
                  flexible with our transport choices, while saving us a bunch
                  of money because we're only paying for a car when we actually
                  need it.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                How do I do my grocery shopping?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">...</p>
                <p className="text-gray-500 dark:text-gray-400">...</p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                I need a car to keep my kids safe.
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">...</p>
                <p className="text-gray-500 dark:text-gray-400">...</p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                What about when I go on holiday?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">...</p>
                <p className="text-gray-500 dark:text-gray-400">...</p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Can't I just buy an electic car?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">...</p>
                <p className="text-gray-500 dark:text-gray-400">...</p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                But my car is my pride &amp; joy!
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">...</p>
                <p className="text-gray-500 dark:text-gray-400">...</p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                I'm not fit enough to walk places or ride a bike.
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">...</p>
                <p className="text-gray-500 dark:text-gray-400">...</p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                I don't feel safe riding a bike.
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">...</p>
                <p className="text-gray-500 dark:text-gray-400">...</p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Don't just take our word for it
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Hundreds of people have already made the switch to living car
              free.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div className="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <div className="flex items-center mb-4 space-x-4">
                <img
                  className="w-16 h-16 rounded-full"
                  src="/profile-1-250.jpg"
                  alt="Graeme Clifford Headshot"
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
                  It's changed my life
                </h3>
              </div>
              <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
                At first I was really skeptical. I couldn't imagine a world
                where I didn't own a car but after a week or two I couldn't
                believe how easy it was and how much my life had improved.
              </p>
            </div>
            <div className="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <div className="flex items-center mb-4 space-x-4">
                <img
                  className="w-16 h-16 rounded-full"
                  src="/profile-2-250.jpg"
                  alt="Samantha Jackson Headshot"
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
                  I don't miss the traffic
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
                <img
                  className="w-16 h-16 rounded-full"
                  src="/profile-3-250.jpg"
                  alt="Malo Edwards Headshot"
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
                  I've saved so much money
                </h3>
              </div>
              <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
                I didn't realise my car was costing me so much money. When
                adding up what I now pay for public transport, car sharing and
                taxis, I'm still much better off each month.
              </p>
            </div>
            <div className="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <div className="flex items-center mb-4 space-x-4">
                <img
                  className="w-16 h-16 rounded-full"
                  src="/profile-4-250.jpg"
                  alt="Miles Bolt Headshot"
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
                  I'm fitter than ever
                </h3>
              </div>
              <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
                Now that I walk or ride most places, I've lost so much weight
                and I'm feeling healthier than ever. I love being outdoors more
                often, surrounded by nature and fresh air.
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
                <a
                  href="#"
                  className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section> */}
    </Layout>
  );
}
