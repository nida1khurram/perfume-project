"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';
export default function About() {
  return (
    <>
        <section className="text-gray-600 body-font" >
  <div className="container px-5 py-10 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
    
 <h1 className="title-font sm:text-4xl text-4xl my-5 font-medium text-gray-500 text-center">
        <Typewriter
      options={{
      strings: [
      'ABOUT US'],
    autoStart: true,
    loop: true,
  }}
/>
 </h1> 
 {/* h2 */}
 <h2 className="title-font sm:text-4xl text-4xl mb-4 font-medium 
      ">
        {/*  */}
       <span className='gra'>Welcome to NK Perfume Club!</span> 
      </h2>
      <p className="leading-relaxed text-lg text-gray-400">
      At NK Perfume Club, we believe that a fragrance is more than just a scent—it’s an experience, a memory, and a statement. Our mission is to bring you the finest selection of authentic designer perfumes and colognes, ensuring that you find the perfect fragrance to express your unique personality.
      </p>

      <h2 className="title-font sm:text-3xl text-3xl my-4 font-medium 
      ">
        {/*  */}
       <span className='gra'>Why Choose Us?</span> 
      </h2>

      <span className='text-gray-400'>Authenticity Guaranteed:</span>
      <p className="leading-relaxed text-lg text-gray-400">
      
       We pride ourselves on offering only 100% genuine designer brands. No knockoffs, no imitations—just pure, luxurious scents.</p>
       <span className='text-gray-400'> Diverse Selection:</span>
        <p className="leading-relaxed text-lg text-gray-400">
            With over 20 top brands, including Armaf, Versace, Gucci, and Dior, we have something for everyone. Whether you prefer fresh florals, spicy orientals, or woody musks, our curated collection has it all.</p>
            <span className='text-gray-400'> Exceptional Value:</span>
        <p className="leading-relaxed text-lg text-gray-400">
        Quality doesn’t have to come at a high price. We provide premium fragrances at competitive prices, making luxury accessible to all.</p>
        <span className='text-gray-400'> Customer-Centric Service: </span>
        <p className="leading-relaxed text-lg text-gray-400">Your satisfaction is our top priority. From easy browsing to secure checkout and fast delivery, we ensure a seamless shopping experience.</p>
        <h2 className="title-font sm:text-3xl text-3xl my-4 font-medium">
       <span className='gra'>Our Story</span> 
         </h2>

        <p className="leading-relaxed text-lg text-gray-400">
Founded with a passion for perfumery, NK Perfume Club has grown into a trusted name in the fragrance industry. Our journey began with a simple goal: to share the joy of exquisite scents with the world. Today, we continue to uphold this vision by offering a diverse range of perfumes and colognes that cater to every taste and occasion.
</p>
<h2 className="title-font sm:text-3xl text-3xl my-4 font-medium">
       <span className='gra'>Join the Club</span> 
         </h2>
<p className="leading-relaxed text-lg text-gray-400">

Discover your signature scent with NK Perfume Club. Whether you’re looking for a gift or treating yourself, our collection is designed to inspire and delight. Join our community of fragrance enthusiasts and experience the art of perfumery like never before.</p>

      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
      <h2 className="text-gray-700 font-medium title-font tracking-wider text-sm">
        NIDA KHURRAM
      </h2>
      <p className="text-gray-500">Senior Product Designer</p>
    </div>
  </div>
</section>

    </>
  )
}
