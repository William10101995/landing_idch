"use client";

import { Hero } from "@/components/Hero/Hero";
import { Counter } from "@/components/Counter";
import { DividerSection } from "@/components/Divider/Divider";
import { Team } from "@/components/Team/Team";
import { Faqs } from "@/components/Faqs/Faqs";
import { NextUIProvider } from "@nextui-org/react";
import { Contact } from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Hero />
        <DividerSection />
        <Counter />
        <DividerSection />
        <Team />
        <DividerSection />
        <Faqs />
        <DividerSection />
        <Contact />
      </NextUIProvider>
    </>
  );
}
