import React from "react";
import reactpng from "../../assets/react.png";
import { motion } from "framer-motion";
import ImgTeste from "./ImgTeste";

const SvgIcon = () => {
  return (
    <div className="forma">
      <ImgTeste teste={reactpng} />
      <ImgTeste teste={reactpng} />
      <ImgTeste teste={reactpng} />
      <ImgTeste teste={reactpng} />
      <ImgTeste teste={reactpng} />
    </div>
  );
};

export default SvgIcon;
