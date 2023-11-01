"use client";
import React from "react";
import { MotionTransition } from "../MotionTransition";
import { dataTeam, dataTeam2 } from "./dataTeam";

export const Team = () => {
  return (
    <MotionTransition className="text-gray-600 body-font">
      <div id="equipo" className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-medium title-font mb-4 text-gray-900">
            {dataTeam2.title}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {dataTeam2.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {dataTeam.map((item) => (
            <div className="p-4 lg:w-1/4 md:w-1/2" key={item.id}>
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={item.image}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    {item.full_name}
                  </h2>
                  <h3 className="text-gray-500 mb-3">{item.position}</h3>
                  <p className="mb-4">{item.description}</p>
                  <span className="inline-flex">
                    <a
                      className="text-gray-500"
                      href={item.socialUrl}
                      target="_blank"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MotionTransition>
  );
};
