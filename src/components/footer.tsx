import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <section>
        <footer className="text-gray-500 body-font bg-gray-400">
          <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <Link
                href={"/"}
                className="flex title-font font-medium items-center md:justify-start justify-center text-gray-600 hover:text-blue-500"
              >
                {/* logo */}
                <div className="flex items-center">
                  <Image
                    className=""
                    alt="logo"
                    width={60}
                    height={60}
                    src={require("../../picture/logo.jpg")}
                  />
                </div>
                <span className="ml-3 text-xl">
                 NK PERFUME CLUB
                </span>
              </Link>

       
            </div>
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-5 md:mt-0 mt-5 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  CATEGORIES
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      MEN PERFUME
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      WOMEN PERFUME
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      GIFT SET
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  ABOUT NK CLUB
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      ABOUT US
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      CONTACT US
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  FIND US ON
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      FACEBOOK
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      INSTAGRAM
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      TWITTER
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-blue-500"
                    >
                      LINKENDIN
                    </Link>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-400">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-500 text-sm text-center sm:text-left">
                © 2024 NK PERFUME CLUB —
                <Link
                  href="https://www.linkedin.com/in/nida-khurram/"
                  rel="noopener noreferrer"
                  className="text-gray-900 ml-1 hover:text-blue-500"
                  target="_blank"
                >
                  @KN 
                </Link>
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
              
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
