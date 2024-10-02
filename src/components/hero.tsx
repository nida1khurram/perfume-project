"use client";
import React from "react";
import Typewriter from "typewriter-effect";

import Imageslider from "./imagesSlider";
import ShopCollection from "./bestCollection/page";
export default function Hero() {
  return (
    <>
    <section >
      <h1 className="title-font sm:text-4xl text-4xl my-10 font-medium  text-center text-gray-500 ">
        <Typewriter
          options={{
            strings: ["Men Perfume", "Women Perfume", "Gift Set"],
            autoStart: true,
            loop: true,
          }}/>
      </h1>
      <Imageslider />
      <ShopCollection />
    </section>
   
    </>
  );
}
