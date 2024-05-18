const globalVariants = {
  containerVariants: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
  fadeInVariants: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        type: "easeIn   ",
        stiffness: 20,
      },
    },
  },

  scrollUpVariants: {
    hidden: {
      opacity: 0,
      y: 500,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "easeIn",
        stiffness: 10,
      },
    },
  },

  leftComeInVariants: {
    hidden: {
      x: -500,
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 50,
      },
    },
  },
};

export { globalVariants };
