"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
export default function Men() {
  return (
    <section className="text-blue-800 body-font" >
      <h1 className="title-font sm:text-4xl text-4xl my-20 font-medium text-gray-600 text-center">
        <Typewriter
          options={{
            strings: ["BEST PERFUME FOR MEN "],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4 cursor-pointer">
          {/* 1 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
            <a className="block relative h-96 rounded overflow-hidden">
              <Image
                alt="menPerfume"
                className="object-cover object-center w-full h-full block  hover:animate-pulse"
                src={require("../../../picture/Perfume-men/BrioniEdp-2.png")}
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
                100 ML
              </h3>
              <h2 className="text-gray-400 title-font text-lg font-medium hover:text-blue-500 ">
                BRIONI EAU DE PERFUM EDP
              </h2>
              <p className="mt-1">$22.50</p>
            </div>
          </div>

          {/* 2 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:animate-pulse">
            <a className="block relative h-96 rounded overflow-hidden">
              <Image
                alt="menPerfume"
                className="object-cover object-center w-full h-full block"
                src={require("../../../picture/Perfume-men/BURBERRYMRBURBERRYE  (1).png")}
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
                {/* 100 ML */}
              </h3>
              <h2 className="text-gray-400 title-font text-lg font-medium hover:text-blue-500 ">
                KILIYAN ROSES ON ICE
              </h2>
              <p className="mt-1">$41.50</p>
            </div>
          </div>

          {/* 3 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-96 rounded overflow-hidden">
              <Image
                alt="menPerfume"
                className="object-cover object-center w-full h-full block hover:animate-pulse"
                src={require("../../../picture/Perfume-men/BURBERRYMRBURBERRYE  (2).png")}
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
                50 ML
              </h3>
              <h2 className="text-gray-400 title-font text-lg font-medium hover:text-blue-500 ">
                BURBERRY MR BURBERRY EDT
              </h2>
              <p className="mt-1">$32.50</p>
            </div>
          </div>

          {/* 4 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
            <a className="block relative h-96 rounded overflow-hidden">
              <Image
                alt="menPerfume"
                className="object-cover object-center w-full h-full block hover:animate-pulse"
                src={require("../../../picture/Perfume-men/DiorHommeParfum.png")}
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
                100 ML
              </h3>
              <h2 className="text-gray-400 title-font text-lg font-medium hover:text-blue-500 ">
                DIOR HOMME PERFUME
              </h2>
              <p className="mt-1">$22.50</p>
            </div>
          </div>

          {/* 5 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
            <a className="block relative h-96 rounded overflow-hidden">
              <Image
                alt="menPerfume"
                className="object-cover object-center w-full h-full block hover:animate-pulse"
                src={require("../../../picture/Perfume-men/BvlgariMeninBlack100ml.png")}
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
                100 ML
              </h3>
              <h2 className="text-gray-400 title-font text-lg font-medium hover:text-blue-500 ">
                BVLGARI MEN IN BLACK
              </h2>
              <p className="mt-1">$17.50</p>
            </div>
          </div>

          {/* 6 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
            <a className="block relative h-96 rounded overflow-hidden">
              <Image
                alt="menPerfume"
                className="object-cover object-center w-full h-full block hover:animate-pulse"
                src={require("../../../picture/Perfume-men/DOLCE_GABBANA.png")}
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
                100 ML
              </h3>
              <h2 className="text-gray-400 title-font text-lg font-medium hover:text-blue-500 ">
                DOLCE & GABBANA
              </h2>
              <p className="mt-1">$19.50</p>
            </div>
          </div>
          {/* 7 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
            <a className="block relative h-96 rounded overflow-hidden">
              <Image
                alt="menPerfume"
                className="object-cover object-center w-full h-full block hover:animate-pulse"
                src={require("../../../picture/Perfume-men/KilianFlowerofImmortality.png")}
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
                50 ML
              </h3>
              <h2 className="text-gray-400 title-font text-lg font-medium hover:text-blue-500 ">
                KILIAN FLOWER OF IMMORTALITY
              </h2>
              <p className="mt-1">$32.50</p>
            </div>
          </div>
          {/* 8 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
            <a className="block relative h-96 rounded overflow-hidden">
              <Image
                alt="menPerfume"
                className="object-cover object-center w-full h-full block hover:animate-pulse"
                src={require("../../../picture/Perfume-men/ClubDeNuitOud.png")}
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
                150 ML
              </h3>
              <h2 className="text-gray-400 title-font text-lg font-medium hover:text-blue-500 ">
                ARMAF CLUB DE NUIT OUD
              </h2>
              <p className="mt-1">$22.50</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
