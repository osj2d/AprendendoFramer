import React from "react";
import { motion } from "framer-motion";

const ImgTeste = ({ teste }) => {
  return (
    <motion.img
      src={teste}
    //   initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.5 }}
    />
  );
};

export default ImgTeste;
