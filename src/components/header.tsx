import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="mt-2 flex justify-between px-4  text-gray-500   text-2xl items-center ">
      {/* logo */}
      <div className="flex items-center gap-1">
        
        <Image
          className=""
          alt="logo"
          width={60}
          height={60}
          src={require("../../picture/logo.jpg")}
        />
        <span className="hover:text-blue-500"> NK PERFUME CLUB</span>
       
      </div>

      {/* links */}

      <nav>
        {/* flex works only children */}
        <ul className="flex gap-x-5 ">
          <li className="hover:text-blue-500 hover:underline">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-blue-500 hover:underline">
            <Link href={"/menPerfume"}>Men Perfume</Link>
          </li>
          <li className="hover:text-blue-500 hover:underline">
            <Link href={"/womenPerfume"}>Women Perfume</Link>
          </li>
          <li className="hover:text-blue-500 hover:underline">
            <Link href={"/giftSet"}>Gift Set</Link>
          </li>
          <li className="hover:text-blue-500 hover:underline">
            <Link href={"/about"}>About</Link>
          </li >
          <li className="hover:text-blue-500 hover:underline">
            <Link href={"/contactUs"}>Contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
