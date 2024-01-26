import React from "react";
import { Link } from "react-router-dom";
import styles from "./MenuL.module.css";

const MenuL = () => {
  return (
    <div className={styles.menu}> 
      <Link to="/">Home</Link>
      <Link to="quadrado">quadrado</Link>
      <Link to="circulo">circulo</Link>
      <Link to="triangulo">triangulo</Link>
      <Link to="svgIcon">svgIcon</Link>
    </div>
  );
};

export default MenuL;
