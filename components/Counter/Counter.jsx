"use client";
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { MotionTransition } from "../MotionTransition";
import { dataCounter, dataCounter2 } from "./counter.data";
import { useAnimation, useInView } from "framer-motion";

export const Counter = () => {
  const [start, setStart] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView && start) {
      mainControls.start("visible");
      slideControls.start("visible");
      setStart(false);
    }
  }, [isInView]);
  return (
    <MotionTransition className="text-gray-600 body-font">
      <div
        id="institucional"
        className="container px-5 py-24 mx-auto flex flex-wrap"
      >
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium text-3xl mb-2 text-gray-900">
              {dataCounter2.title}
            </h1>
            <div className="leading-relaxed">{dataCounter2.description}</div>
          </div>
          {dataCounter.map((item) => (
            <div key={item.id} className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                {!start ? (
                  <CountUp
                    init={item.startNumber}
                    end={item.endNumber}
                    duration={5}
                  />
                ) : null}
              </h2>
              <p className="leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            className="object-cover object-center w-full h-full"
            src={dataCounter2.image_url}
            alt="stats"
            ref={ref}
          />
        </div>
      </div>
    </MotionTransition>
  );
};
