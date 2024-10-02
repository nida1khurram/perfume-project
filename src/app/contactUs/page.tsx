"use client"

import React from 'react'
import Link from 'next/link';
import Typewriter from "typewriter-effect";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function ContactUs() {
  return (
    <div>
        <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col text-center w-full mb-5">
    {/*  */}
    <h1 className="title-font sm:text-4xl text-4xl my-10 font-medium text-gray-600 text-center">
        <Typewriter
          options={{
            strings: ["Contact Us "],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-indigo-500">example@email.com</a>
          <p className="leading-normal my-5">
            49 Smith St.
            <br />
            Saint Cloud, MN 56301
          </p>
          
{/* react icon */}
<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-5">
                {/* fb */}
                <Link target="_blank" href={"/"} className="text-gray-500">
                  <FaFacebookF className="text-2xl hover:text-blue-500" />
                </Link>
                {/* insta */}
                <Link target="_blank" href={"/"} className="text-gray-500">
                  <FaInstagram className="text-2xl hover:text-blue-500" />
                </Link>
                {/* twi */}
                <Link target="_blank" href={"/"} className="text-gray-500">
                  <FaTwitter className="text-2xl hover:text-blue-500" />
                </Link>
                {/* link */}
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/nida-khurram/"}
                  className="text-gray-500"
                >
                  <FaLinkedinIn className="text-2xl hover:text-blue-500" />
                </Link>
              </span>

          {/* icon */}
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
