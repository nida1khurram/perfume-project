"use client"
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';

export default function Women() {
  return (
 
<section className="text-blue-800 body-font" id='women'>
    
<h1 className="title-font sm:text-4xl text-4xl my-20 font-medium text-gray-600 text-center">
        <Typewriter
  options={{
    strings: [
        'BEST PERFUME FOR WOMEN ',
      ],
    autoStart: true,
    loop: true,
  }}
/>
</h1>

        <div className="container px-5 py-10 mx-auto">
           <div className="flex flex-wrap -m-4 cursor-pointer ">
                {/* 1 */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-96 rounded overflow-hidden">
                        <Image
            alt="menPerfume"
            className="object-cover object-center w-full h-full block"
            src={require("../../../picture/perfume-women/BURBERRYMYBURBERRYBLUSHEDP50ML.png")}
          />
                    </a>
                    <div className="mt-4">
                     <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
            90 ML
                    </h3>
                    <h2 className="text-gray-400 title-font text-lg font-medium hover:text-blue-500">
                   MY BURBERRY BLUSH EDP
                     </h2>
                    <p className="mt-1">$22.50</p>
                </div>
             </div>

        {/* 2 */}
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-96 rounded overflow-hidden">
                        <Image
            alt="menPerfume"
            className="object-cover object-center w-full h-full block"
            src={require("../../../picture/perfume-women/KilianMoonlightinHeaven.png")}
          />
                    </a>
                    <div className="mt-4">
                     <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
            50 ML
                    </h3>
                    <h2 className="text-gray-400 title-font text-lg font-medium hover:text-blue-500">
                    KILIAN MOON LIGHT IN HEAVEN
                     </h2>
                    <p className="mt-1">$18.50</p>
                </div>
             </div>

{/* 3 */}
<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-96 rounded overflow-hidden">
                        <Image
            alt="menPerfume"
            className="object-cover object-center w-full h-full block"
            src={require("../../../picture/perfume-women/CarolinaHererra212SexyEdp100ml.png")}
          />
                    </a>
                    <div className="mt-4">
                     <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
            100 ML
                    </h3>
                    <h2 className="text-gray-400 title-font text-lg font-medium hover:text-blue-500">
                    CAROLINA HERRERA 212
                     </h2>
                    <p className="mt-1">$16.50</p>
                </div>
             </div>

{/* 4 */}
<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-96 rounded overflow-hidden">
                        <Image
            alt="menPerfume"
            className="object-cover object-center w-full h-full block"
            src={require("../../../picture/perfume-women/PacoRobanneOlympeaEDP80ml.png")}
          />
                    </a>
                    <div className="mt-4">
                     <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
            80 ML
                    </h3>
                    <h2 className="text-gray-400 title-font text-lg font-medium hover:text-blue-500">
            PACO RABBANE OLYMPEA
                     </h2>
                    <p className="mt-1">$19.50</p>
                </div>
             </div>

      {/* 5 */}
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-96 rounded overflow-hidden">
                        <Image
            alt="menPerfume"
            className="object-cover object-center w-full h-full block"
            src={require("../../../picture/perfume-women/CKEternityFlameWomen100ml.png")}
          />
                    </a>
                    <div className="mt-4">
                     <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
            100 ML
                    </h3>
                    <h2 className="text-gray-400 title-font text-lg font-medium hover:text-blue-500">
            ETERNITY FLAME WOMEN
                     </h2>
                    <p className="mt-1">$15.50</p>
                </div>
             </div>

     {/* 6 */}
     <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-96 rounded overflow-hidden">
                        <Image
            alt="menPerfume"
            className="object-cover object-center w-full h-full block"
            src={require("../../../picture/perfume-women/PureXSforHerEDP.png")}
          />
                    </a>
                    <div className="mt-4">
                     <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
            80 ML
                    </h3>
                    <h2 className="text-gray-400 title-font text-lg font-medium hover:text-blue-500">
                    PACO RABBANE PURE XS
                     </h2>
                    <p className="mt-1">$30.50</p>
                </div>
             </div>
             {/* 7 */}
             <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-96 rounded overflow-hidden">
                        <Image
            alt="menPerfume"
            className="object-cover object-center w-full h-full block"
            src={require("../../../picture/perfume-women/ThierryMuglerAlien90medp.png")}
          />
                    </a>
                    <div className="mt-4">
                     <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
            90 ML
                    </h3>
                    <h2 className="text-gray-400 title-font text-lg font-medium hover:text-blue-500">
           THIERRY MUGLER ALIEN EDP
                     </h2>
                    <p className="mt-1">$20.50</p>
                </div>
             </div>
             {/* 8 */}
             <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-96 rounded overflow-hidden">
                        <Image
            alt="menPerfume"
            className="object-cover object-center w-full h-full block"
            src={require("../../../picture/perfume-women/TomFordBlackOrchidE.png")}
          />
                    </a>
                    <div className="mt-4">
                     <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
            30 ML
                    </h3>
                    <h2 className="text-gray-400 title-font text-lg font-medium hover:text-blue-500">
           TOM FORD BLACK ORCHID
                     </h2>
                    <p className="mt-1">$25.50</p>
                </div>
             </div>

    </div>
  </div>
</section>

    
  )
}
