import React from "react";
import styles from "./Quadrado.module.css";
import { motion } from "framer-motion";

const Quadrado = () => {
  const list = { hidden: { opacity: 0 } };
  const item = { hidden: { x: -10, opacity: 1 } };

  return (
    <div className="forma">
      <motion.div
      >
        <motion.div variants={item} whileHover={{ scale: [1, 2, 2, 1, 1], rotate: [0, 0, 270, 270, 0] }} className={styles.quadrado}></motion.div>
      </motion.div>
    </div>
  );
};

export default Quadrado;
