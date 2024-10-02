"use client"
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";
export default function ShopCollection() {
  return (
    <section>
      <h1 className="title-font sm:text-4xl text-4xl my-10 font-medium  text-center text-gray-500 ">
        <Typewriter
          options={{
            strings: ["SHOP FOR BEST COLLECTIONS"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* 1 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:animate-bounce">
                <Link href={'/menPerfume'}>
              <Image
                alt="menPerfume"
                className="object-cover object-center w-full h-full block"
                src={require("../../../picture/Perfume-men/BvlgariMeninBlack100ml.png")}
              />
              <h2 className="text-gray-600 title-font text-lg font-medium text-center hover:text-blue-500">
                MEN PERFUME
              </h2>
              </Link>
          </div>
            {/* 1 */}
          {/* 2 */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:animate-bounce">
                <Link href={'/womenPerfume'}>
              <Image
                alt="womenPerfume"
                className="object-cover object-center w-full h-full block"
                src={require("../../../picture/perfume-women/BURBERRYMYBURBERRYBLUSHEDP50ML.png")}
              />
              <h2 className="text-gray-600 title-font text-lg font-medium text-center hover:text-blue-500">
                WOMEN PERFUME
              </h2>
              </Link>
          </div>
          {/* 3 */}
         
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:animate-bounce">
                <Link href={'/giftSet'}>
              <Image
                alt="menPerfume"
                className="object-cover object-center w-full h-full block"
                src={require("../../../picture/gift-set/GiftSet.png")}
              />
              <h2 className="text-gray-600 title-font text-lg font-medium text-center hover:text-blue-500">
                GIFT SET
              </h2>
              </Link>
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
}
