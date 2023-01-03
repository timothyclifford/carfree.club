import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Car Free Club</title>
        <meta
          name="description"
          content="Helping people save money, get healthy and feel happier by living without a car"
        />
      </Head>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1600075078247-8e01faaa44a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Car Free Club</h1>
            <p className="mb-5">Because life is too short to sit in traffic</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-10 max-w-4xl">
        <h2 className="mb-5 text-4xl font-bold">Welcome friend 👋</h2>
        <p className="mb-5">
          Do you enjoy sitting in traffic for hours? What about being late
          because it took you so long to find a car park? Or spending 1000s of
          dollars on registration, insurance, servicing, fuel and numerous other
          car related expenses?
        </p>
        <p className="mb-5">
          Many of us would love to never have to sit in traffic or battle for a
          car park again. We'd also be very happy with an extra 20% in our bank
          account each year. But when we contemplate life without a car, it
          seems unrealistic and scary.
        </p>
        <p className="mb-5">
          Well we're here to tell you it's not and that it's actually MUCH
          easier than you probably think.
        </p>
        <p className="mb-5">
          Do you own a car? Maybe there's even 2 or more sitting in your
          driveway?
        </p>
        <p className="mb-5">
          It's not your fault! We're conditioned to see cars as a normal and
          necessary part of our everyday lives. The goal of Car Free Club is to
          show you that it's actually much easier than you think to live without
          owning a car, and if you're interested, help you along your journey.
        </p>
        <p className="mb-5">
          I used to be just like you... I loved my cars, it was my pride and
          joy. I drove EVERYWHERE - regardless of how near or far - never really
          considering how much money it was costing me, the impact it was having
          on my health or the pollution I was producing.
        </p>
        <p className="mb-5">
          Then something clicked. A friend challenged my to live car free for a
          month. At the beginning I was terrified of giving up my car and the
          freedom and convenience it provided me. But after a couple of weeks of
          public transport, riding my bike and walking places I realised owning
          a car wasn't freedom, it was actually having a negative impact on my
          wallet and happiness in general.
        </p>
        <p className="mb-5">
          So here's my challenge to you... Give it a try! I'm not suggesting go
          car free overnight but there's a number of things you can try which
          can reduce your reliance on your car and in the process, save you
          money and improve your life in general.
        </p>
        {/* We're constantly bombarded with
          advertising showing cars being driven along winding country roads, or
          along deserted sand dunes */}
      </div>
    </Layout>
  );
}
