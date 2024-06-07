import React from "react";
import { TypeAnimation } from "react-type-animation";

const NameTypeAnimation: React.FC = () => {
  return (
    <TypeAnimation
      sequence={["Ridlo", 1000, "Achmad", 1000, "Ghifary", 1000]}
      speed={90}
      repeat={Infinity}
    />
  );
};

export default NameTypeAnimation;
