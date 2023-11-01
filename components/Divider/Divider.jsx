"use client";
import React from "react";
import { Divider } from "@nextui-org/react";
import { MotionTransition } from "../MotionTransition";

export const DividerSection = () => {
  return (
    <MotionTransition className="flex items-center justify-center">
      <Divider className="my-4 w-16 sm:w-full sm:mx-4 md:w-1/2 md:mx-auto lg:w-1/3 lg:mx-auto xl:w-1/4 xl:mx-auto" />
    </MotionTransition>
  );
};
