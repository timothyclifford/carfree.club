import { PropsWithChildren, useMemo, useState } from "react";
import Layout from "../components/layout";
import Meta from "../components/meta";
import { PageTitle } from "../components/pageTitle";

const FUEL_COST = 70 * 52;
const MAINTENANCE_COST = 30 * 52;

const BIKE = 75 * 12;

// Daily Myki 3 times per week for 40 weeks of the year
const PUBLIC_TRANSPORT = 9.2 * 3 * 52;
// 20 per month
const CAR_SHARING_MEMBERSHIP = 20 * 12;
// 1 hour * 20kms 3 times per week for 40 weeks of the year
const CAR_SHARING_USAGE = (5.5 + 20 * 0.4) * 3 * 52;

const COST_PER_CAR_OWNING = 15000;
const COST_PER_CAR_RUNNING = FUEL_COST + MAINTENANCE_COST;

const Row = (props: PropsWithChildren) => {
  return <div className="mb-20">{props.children}</div>;
};

export default function CarFreeCalculator() {
  const [savings, setSavings] = useState(0);
  const [cars, setCars] = useState(1);
  const [carsText, setCarsText] = useState("car");
  const [sellCar, setSellCar] = useState(true);
  const [sellCarText, setSellCarText] = useState("sell this");
  const [walk, setWalk] = useState(false);
  const [ride, setRide] = useState(false);
  const [pt, setPt] = useState(false);
  const [carSharing, setCarSharing] = useState(false);
  const [getAround, setGetAround] = useState("teleporting");
  useMemo(() => {
    let optionsSelected = 0;
    if (walk) {
      optionsSelected++;
    }
    if (ride) {
      optionsSelected++;
    }
    if (pt) {
      optionsSelected++;
    }
    if (carSharing) {
      optionsSelected++;
    }
    let gettingAroundCosts = 0;
    if (ride) {
      gettingAroundCosts = gettingAroundCosts + BIKE / optionsSelected;
    }
    if (pt) {
      gettingAroundCosts =
        gettingAroundCosts + PUBLIC_TRANSPORT / optionsSelected;
    }
    if (carSharing) {
      gettingAroundCosts =
        gettingAroundCosts +
        CAR_SHARING_MEMBERSHIP +
        CAR_SHARING_USAGE / optionsSelected;
    }
    if (sellCar) {
      setSavings(cars * COST_PER_CAR_OWNING - gettingAroundCosts);
    } else {
      setSavings(cars * COST_PER_CAR_RUNNING - gettingAroundCosts);
    }
  }, [cars, sellCar, walk, ride, pt, carSharing]);
  useMemo(() => {
    setCarsText(cars > 1 ? "cars" : "car");
  }, [cars]);
  useMemo(() => {
    if (sellCar) {
      setSellCarText(cars > 1 ? "sell these" : "sell this");
    } else {
      setSellCarText(cars > 1 ? "keep these" : "keep this");
    }
  }, [cars, sellCar]);
  useMemo(() => {
    {
      const transport = [];
      if (walk) {
        transport.push("walking");
      }
      if (ride) {
        transport.push("riding a bike");
      }
      if (pt) {
        transport.push("catching public transport");
      }
      if (carSharing) {
        transport.push("using a car sharing service");
      }
      let transportJoined = "teleporting";
      for (let option of transport) {
        if (transportJoined === "teleporting") {
          transportJoined = option;
        } else if (option === transport[transport.length - 1]) {
          transportJoined = `${transportJoined} and ${option}`;
        } else {
          transportJoined = `${transportJoined}, ${option}`;
        }
      }
      setGetAround(transportJoined);
    }
  }, [walk, ride, pt, carSharing]);
  return (
    <Layout>
      <Meta
        title="Car Free Calculator - Car Free Club"
        description="Calculate how much money you could save by driving less or selling your car."
        url="https://carfree.club/car-free-calculator"
      ></Meta>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <PageTitle
            title="Car Free Calculator"
            subTitle="The car free calculator helps you see how much money you could save by
          selling your car or simply changing how you get around."
          ></PageTitle>
          <div className="flex flex-col max-w-md mx-auto">
            <Row>
              <label
                htmlFor="steps-range"
                className="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
              >
                How many cars do you own?
              </label>
              <input
                id="steps-range"
                type="range"
                min="1"
                max="4"
                step="1"
                defaultValue={cars}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"
                onChange={(el) => {
                  setCars(Number.parseInt(el.currentTarget.value));
                }}
              ></input>
              <div className="flex px-1">
                <div className="w-0 text-left">1</div>
                <div className="w-1/3"></div>
                <div className="w-1/3 text-right">
                  <span className="float-left">2</span>
                  <span className="float-right">3</span>
                </div>
                <div className="w-1/3 text-right">4</div>
              </div>
            </Row>
            <Row>
              <p className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">
                Would you like to sell your car or keep it but drive less?
              </p>
              <div className="flex space-x-8 justify-center">
                <div className="flex items-center">
                  <input
                    id="sell-or-keep-sell"
                    type="radio"
                    name="sell-or-keep"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    defaultChecked={sellCar}
                    onChange={() => {
                      setSellCar(true);
                    }}
                  />
                  <label
                    htmlFor="sell-or-keep-sell"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Sell my car
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="sell-or-keep-keep"
                    type="radio"
                    name="sell-or-keep"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    defaultChecked={!sellCar}
                    onChange={() => {
                      setSellCar(false);
                    }}
                  />
                  <label
                    htmlFor="sell-or-keep-keep"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Keep my car but drive less
                  </label>
                </div>
              </div>
            </Row>
            <Row>
              <p className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">
                How are you planning to get around car free?
              </p>
              <div className="grid grid-cols-2 w-96 mx-auto">
                <div className="flex items-center pb-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={walk}
                      className="sr-only peer"
                      onChange={(el) => {
                        setWalk(el.currentTarget.checked);
                      }}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Walk
                    </span>
                  </label>
                </div>
                <div className="flex items-center pb-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={ride}
                      className="sr-only peer"
                      onChange={(el) => {
                        setRide(el.currentTarget.checked);
                      }}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Ride a bike
                    </span>
                  </label>
                </div>
                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={pt}
                      className="sr-only peer"
                      onChange={(el) => {
                        setPt(el.currentTarget.checked);
                      }}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Public transport
                    </span>
                  </label>
                </div>
                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={carSharing}
                      className="sr-only peer"
                      onChange={(el) => {
                        setCarSharing(el.currentTarget.checked);
                      }}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Car sharing
                    </span>
                  </label>
                </div>
              </div>
            </Row>
          </div>
          <div className="max-w-md mx-auto">
            <h2 className="mb-4 text-2xl font-bold tracking-tight leading-none">
              Results
            </h2>
            <p className="mb-4 font-medium">
              You currently own {cars} {carsText} and you&apos;re planning to{" "}
              {sellCarText} and instead get around by {getAround}.
            </p>
            <p className="mb-8">
              By going car free, you could save yourself...
            </p>
            <p className="mb-20 text-xl font-bold tracking-tight leading-none">
              {Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
                maximumSignificantDigits: 3,
              }).format(savings)}{" "}
              per year
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
