"use client"
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';

export default function GiftSet() {
  return (
 
<section className="text-blue-800 body-font" >
    
<h1 className="title-font sm:text-4xl text-4xl mt-10 font-medium text-gray-600 text-center">
        <Typewriter
  options={{
    strings: [
        'Best Perfume For Gift Sets ',
      ],
    autoStart: true,
    loop: true,
  }}
/>
</h1>

        <div className="container px-5 py-10 mx-auto ">
           <div className="flex flex-wrap -m-4  cursor-pointer">
                {/* 1 */}
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:animate-pulse">
                    <a className="block relative h-96 rounded overflow-hidden">
                        <Image
            alt="menPerfume" 
            width={500}
            height={500}
            className="object-cover object-center w-full h-full block "
            src={require("../../../picture/gift-set/set1.jpg")}
          />
                    </a>
                    <div className="mt-4">
                     
                    <h2 className="text-gray-400 title-font text-lg font-medium hover:text-blue-500">
                    Sarah Jessica Parker
                     </h2>
                     <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">
                     Lovely 4 Pcs Gift Set
                    </h3>
                    <p className="mt-1">$50.12</p>
                </div>
             </div>

        {/* 2 */}
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full  hover:animate-pulse">
                    <a className="block relative h-96 rounded overflow-hidden ">
                        <Image
            alt="menPerfume"
            className="object-cover object-center w-full h-full block "
            src={require("../../../picture/gift-set/set2.jpg")}
          />
                    </a>
                    <div className="mt-4 ">
                    
                    <h3 className="text-gray-400 title-font text-lg font-medium hover:text-blue-500">
                       Versace Yellow Daimond
                     </h3>
                     <h2 className="text-gray-200 text-xs tracking-widest title-font mb-1 ">
                     4 Pcs Gift Set
                    </h2>
                    <p className="mt-1">$20.50</p>
                </div>
             </div>


     

    </div>
  </div>
</section>

    
  )
}
