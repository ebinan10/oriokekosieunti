import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section
        id="bg"
        className=" min-h-[60vh] md:min-h-screen w-full flex items-center justify-center shadow-2xl"
      >
        {/* Overlay */}
        <div className=" inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative text-center px-6">
          <h1 className="text-white text-2xl md:text-4xl font-bold mb-6">
            Mountain of Possibility
          </h1>


           <div className="flex flex-col justify-center gap-4 sm:flex-row">
                      <Link
                        to="/contact"
                        className="rounded-lg bg-yellow-500 px-8 py-3 text-md md:text-lg font-semibold text-[white] transition-all duration-300 hover:bg-yellow-600 hover:scale-105"
                      >
                        Contact Us
                      </Link>

                      <Link
                        to="/about"
                        className="rounded-lg border border-white px-8 py-3 text-md md:text-lg font-semibold text-[white] transition-all duration-300 hover:bg-white hover:text-black"
                      >
                        Learn More
                      </Link>
                    </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-black py-20 text-gray-300">
              <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                  {/* Left */}
                  <div>
                    <h2 className="mb-6 text-md md:text-lg font-bold text-white">
                      Welcome to Mountain of Possibility
                    </h2>

                    <p className="mb-6 text-gray-300 text-sm md:text-md">
                      Mountain of Possibility, situated in Erinmo-Ijesha, Osun State,
                      is known as the Home of Answered Prayers. Through God's grace,
                      countless testimonies of healing, restoration, deliverance, and
                      divine breakthroughs have transformed lives.
                    </p>

                    <p className=" text-gray-300 text-sm md:text-md">
                      Popularly called the{" "}
                      <strong className="text-yellow-500">
                        Jerusalem Hub of Africa
                      </strong>
                      , Ori Oke Kosunti is blessed with unique natural landmarks,
                      sacred caves, historical artifacts, and holy prayer grounds
                      where people continually encounter God's power.
                    </p>
                  </div>

                  {/* Right */}
                  <div className="rounded-xl border border-yellow-500 bg-gray-900 p-8 shadow-xl">
                    <h3 className="mb-6 text-md md:text-lg font-bold text-yellow-400">
                      Our Mission
                    </h3>

                    <p className=" text-gray-300 text-sm md:text-md">
                      Bringing people into a life-changing encounter with Jesus Christ
                      through prayer, worship, the Word of God, and the manifestation
                      of His power.
                    </p>

                    <Link
                      to="/about"
                      className="mt-8 inline-block rounded-md bg-yellow-500 px-6 py-3 font-semibold text-white transition hover:bg-yellow-600"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </section>
    </main>
  );
};

export default Home;