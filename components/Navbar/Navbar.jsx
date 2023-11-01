"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { dataNav } from "./data.nav";
import { NavTransition } from "../MotionTransition";
import Headroom from "react-headroom";

export const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <Headroom
      style={{
        backgroundColor: "white",
      }}
    >
      <NavTransition>
        <nav className="flex flex-wrap items-center justify-between max-w-7xl p-4 mx-auto md:py-8 ">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/idch_logo.png"
              width="150"
              height="48"
              alt="logo instituto del deporte chaqueno"
            />
          </Link>
          <RiMenu3Line
            className={`${
              openMobileMenu ? "hidden" : "block"
            } block text-3xl md:hidden cursor-pointer`}
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          />
          <RiCloseLine
            className={`${
              openMobileMenu ? "block" : "hidden"
            } block text-3xl md:hidden cursor-pointer`}
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          />
          <div
            className={`${
              openMobileMenu ? "block" : "hidden"
            } w-full md:block md:w-auto`}
          >
            <div className="flex flex-col p-4 mt-4 md:pd-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
              {dataNav.map(({ id, title, url }) => (
                <div
                  key={id}
                  className="px-4 transition-all duration-500 ease-in-out"
                >
                  <Link href={url} className="text-lg  hover:text-green-600">
                    {title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </NavTransition>
    </Headroom>
  );
};
