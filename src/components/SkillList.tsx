import React from "react";

const SkillList: React.FC = () => {
  const skillsList = [
    { src: "https://skillicons.dev/icons?i=html", alt: "html5 logo" },
    { src: "https://skillicons.dev/icons?i=css", alt: "css3 logo" },
    { src: "https://skillicons.dev/icons?i=sass", alt: "sass logo" },
    {
      src: "https://skillicons.dev/icons?i=styledcomponents",
      alt: "styledcomponents logo",
    },
    { src: "https://skillicons.dev/icons?i=js", alt: "javascript logo" },
    { src: "https://skillicons.dev/icons?i=ts", alt: "typescript logo" },
    { src: "https://skillicons.dev/icons?i=nextjs", alt: "nextjs logo" },
    { src: "https://skillicons.dev/icons?i=react", alt: "react logo" },
    { src: "https://skillicons.dev/icons?i=vite", alt: "vite logo" },
    { src: "https://skillicons.dev/icons?i=redux", alt: "redux logo" },
    { src: "https://skillicons.dev/icons?i=tailwind", alt: "tailwindcss logo" },
    { src: "https://skillicons.dev/icons?i=bootstrap", alt: "bootstrap logo" },
    { src: "https://skillicons.dev/icons?i=git", alt: "git logo" },
    { src: "https://skillicons.dev/icons?i=mongodb", alt: "mongodb logo" },
    { src: "https://skillicons.dev/icons?i=firebase", alt: "firebase logo" },
    { src: "https://skillicons.dev/icons?i=mysql", alt: "mysql logo" },
    { src: "https://skillicons.dev/icons?i=postgres", alt: "postgresql logo" },
    { src: "https://skillicons.dev/icons?i=supabase", alt: "supabase logo" },
    { src: "https://skillicons.dev/icons?i=express", alt: "express logo" },
    { src: "https://skillicons.dev/icons?i=nodejs", alt: "nodejs logo" },
    { src: "https://skillicons.dev/icons?i=prisma", alt: "prisma logo" },
    { src: "https://skillicons.dev/icons?i=docker", alt: "docker logo" },
    { src: "https://skillicons.dev/icons?i=redis", alt: "redis logo" },
  ];

  return (
    <div
      data-aos="fade-down"
      data-aos-delay="300"
      className="flex flex-wrap items-start justify-start gap-x-1 gap-y-1"
    >
      {skillsList?.map((data, i) => (
        <span className="select-none" key={i}>
          <img src={data.src} height="50" alt={data.alt} />
        </span>
      ))}
    </div>
  );
};

export default SkillList;
