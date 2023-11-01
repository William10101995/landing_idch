export const fadeIn = () => {
  return {
    hidden: {
      y: 80,
      opacity: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: 0.5,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const menuAnimation = () => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
      transition: { ease: "easeOut", duration: 0.5 },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };
};
