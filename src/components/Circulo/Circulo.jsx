import React from "react";
import styles from "./Circulo.module.css";
import { motion } from "framer-motion";



const Circulo = () => {
  return (
    <motion.div
      className={`${styles.circulo} forma`}
      whileHover={{ scale: 1.5 }}
    >
    </motion.div>
  );
};

export default Circulo;
