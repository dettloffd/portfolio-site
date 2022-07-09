import React from "react";
import { motion } from "framer-motion";

export const pillView = { width: ["1rem", "6.5rem"], opacity: [0, 1] };
export const pillTransition = { duration: 0.75, delay: 0.025 };

const MotionPill = () => {
  return (
    <motion.div
      whileInView={pillView}
      transition={pillTransition}
      viewport={{ once: true }}
      className="pill"
    />
  );
};

export default MotionPill;
