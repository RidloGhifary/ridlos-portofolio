import React from "react";
import { TypeAnimation } from "react-type-animation";

const NameTypeAnimation: React.FC = () => {
  return (
    <TypeAnimation
      sequence={["Ridlo", 2000, "Achmad", 2000, "Ghifary", 2000]}
      speed={40}
      repeat={Infinity}
    />
  );
};

export default NameTypeAnimation;
