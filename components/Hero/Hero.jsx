"use client";
import React from "react";
import { MotionTransition } from "../MotionTransition";
import Link from "next/link";
import { heroData } from "./hero.data";

export const Hero = () => {
  return (
    <MotionTransition className="text-gray-600 body-font ">
      <div
        id="inicio"
        className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {heroData.title_one}
            <br className="hidden lg:inline-block" />
            {heroData.title_two}
          </h1>
          <p className="mb-8 leading-relaxed">{heroData.description}</p>
          <div className="flex justify-center">
            <Link
              href="/about"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              {heroData.button_text}
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={heroData.url_image}
          />
        </div>
      </div>
    </MotionTransition>
  );
};
