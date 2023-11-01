import { fadeIn, menuAnimation } from "@/utils/transitions";
import { useInView, useAnimation, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const MotionTransition = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={fadeIn()}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const NavTransition = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (!isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={fadeIn()}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const MenuMobileTransition = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={menuAnimation()}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const CounterTransition = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={fadeIn()}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};
