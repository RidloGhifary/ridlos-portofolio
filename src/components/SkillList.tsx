import React from "react";
import TextScramble from "@skits/react-text-scramble";

const SkillList: React.FC = () => {
  const skillsList = [
    "HTML",
    "CSS",
    "SASS",
    "Javascript",
    "Typescript",
    "Next JS",
    "React JS",
    "TailwindCSS",
    "Bootstrap",
    "MongoDb",
    "MySQL",
    "Git",
    "VS Code",
  ];

  return (
    <div
      data-aos="fade-down"
      data-aos-delay="300"
      className="flex flex-wrap items-start justify-start gap-x-1 gap-y-1"
    >
      {skillsList?.map((data) => (
        <span
          className="text select-none rounded-xl bg-SecondaryColor px-4 py-2 text-xs font-semibold text-white sm:text-sm md:text-base"
          key={data}
        >
          <TextScramble
            autostart
            revealText
            revealSpeed={100}
            scrambleSpeed={50}
            revealMode="typewriter"
            characters="abcdefghijklmnopqrstuvwxyz"
            text={`#${data}`}
          />
        </span>
      ))}
    </div>
  );
};

export default SkillList;
