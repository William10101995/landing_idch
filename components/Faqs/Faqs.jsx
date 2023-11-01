"use client";
import React from "react";
import { dataFaqs, dataFaqs2 } from "./dataFaqs";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { MotionTransition } from "../MotionTransition";
import { AnchorIcon } from "./AnchorIcon";

export const Faqs = () => {
  return (
    <MotionTransition className="text-gray-600 body-font">
      <div id="faqs" className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-medium title-font mb-4 text-gray-900">
            {dataFaqs2.title}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {dataFaqs2.subtitle}
          </p>
        </div>
        {dataFaqs.map((item) => (
          <Accordion key={item.id}>
            <AccordionItem
              aria-label={item.question}
              title={item.question}
              className="w-full max-w-5xl mx-auto"
              indicator={<AnchorIcon />}
            >
              {item.answer}
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </MotionTransition>
  );
};
