"use client";

import { motion } from "framer-motion";

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function AnimatedTile({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.article
      className={className}
      variants={itemVariants}
      whileHover={{
        scale: 1.02,
        y: -4,
        boxShadow: "0 0 30px rgba(168, 85, 247, 0.18)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}
    </motion.article>
  );
}