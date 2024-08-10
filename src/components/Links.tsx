import React from "react";
import { Link } from "react-router-dom";

const Links: React.FC = () => {
  return (
    <ul
      data-aos="fade-left"
      className="absolute right-[0%] top-0 mt-3 flex w-full items-center gap-5 selection:bg-AlmostWhite selection:text-AlmostBlack lg:-right-28 lg:bottom-[100px] lg:top-auto lg:mt-0 lg:h-full lg:w-fit lg:translate-x-0 lg:flex-col lg:justify-end lg:gap-14"
    >
      <li className="h-fit w-fit text-center text-xs hover:underline sm:text-xs md:text-base lg:rotate-90">
        <Link to={"https://medium.com/@ridloghfry"} target="_blank">
          Medium
        </Link>
      </li>
      <li className="h-fit w-fit text-center text-xs hover:underline sm:text-xs md:text-base lg:rotate-90">
        <Link to={"https://github.com/RidloGhifary"} target="_blank">
          Github
        </Link>
      </li>
      <li className="h-fit w-fit text-center text-xs hover:underline sm:text-xs md:text-base lg:rotate-90">
        <Link to={"https://www.linkedin.com/in/ridlo-ghifary/"} target="_blank">
          LinkedIn
        </Link>
      </li>
    </ul>
  );
};

export default Links;
