import React from "react";
import { Code, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import projectList from "./assets/projects.json";
import BackgroundPattern from "./components/BackgroundPattern";
import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC = () => {
  AOS.init({ once: true, delay: 100 });

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
    <main className="overflow-hidden bg-AlmostBlack text-AlmostWhite">
      <BackgroundPattern />

      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        <section className="relative flex min-h-screen flex-col items-start justify-center pt-20 md:items-start md:justify-end md:py-2 md:pt-0">
          <h1
            data-aos="fade-down"
            className="Kalnia text-7xl font-bold selection:bg-AlmostWhite selection:text-AlmostBlack md:text-9xl"
          >
            H`i
            <br />
            I`M Ridlo
          </h1>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <p
              data-aos="fade-down"
              className="text-xs leading-7 selection:bg-AlmostWhite selection:text-AlmostBlack sm:text-sm md:text-base"
            >
              This portfolio is my testament, a showcase of my blossoming skills
              and the fruits of my tireless learning. It&apos;s an invitation to
              embark on a collaborative journey, where together we can transform
              digital dreams into tangible realities. So, come, explore, and
              let&apos;s craft something extraordinary, line by line, pixel by
              pixel.
            </p>
            <div
              data-aos="fade-down-left"
              className="flex flex-wrap items-start justify-start gap-x-1 gap-y-1"
            >
              {skillsList?.map((data) => (
                <span
                  className="text select-none rounded-xl bg-SecondaryColor px-4 py-2 text-xs font-semibold text-white sm:text-sm md:text-base"
                  key={data}
                >
                  #{data}
                </span>
              ))}
            </div>
          </div>

          <ul
            data-aos="fade-left"
            className="absolute right-[0%] top-0 mt-3 flex w-full gap-14 selection:bg-AlmostWhite selection:text-AlmostBlack lg:-right-28 lg:bottom-[100px] lg:top-auto lg:mt-0 lg:h-fit lg:w-fit lg:translate-x-0 lg:flex-col"
          >
            <li className="text-center hover:underline lg:rotate-90">
              <Link to={"https://medium.com/@ridloghfry"} target="_blank">
                Medium
              </Link>
            </li>
            <li className="text-center hover:underline lg:rotate-90">
              <Link to={"https://github.com/RidloGhifary"} target="_blank">
                Github
              </Link>
            </li>
            <li className="text-center hover:underline lg:rotate-90">
              <Link
                to={"https://www.linkedin.com/in/ridlo-ghifary/"}
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </section>

        <section className="py-40">
          <h1
            data-aos="fade-down"
            className="Kalnia custom-h1 text-center text-6xl font-bold uppercase selection:bg-AlmostWhite selection:text-AlmostBlack before:stroke-AlmostWhite md:text-8xl"
          >
            project
          </h1>

          <div className="space-y-6">
            {projectList?.map((data, index: number) => (
              <div
                data-aos="fade-up"
                className="mt-16 grid items-center gap-4 rounded-xl border border-AlmostWhite/50 p-5 md:grid-cols-2"
                key={index}
              >
                <div
                  data-aos="fade-right"
                  className={`border-AlmostWhite ${index % 2 === 0 ? "md:order-last" : null} cursor-pointer select-none rounded-lg`}
                >
                  <img
                    src={import.meta.env.BASE_URL + data.image}
                    alt={data.title}
                    className="h-[300px] w-full rounded-lg object-cover object-top transition-all duration-[7s] ease-linear hover:object-bottom"
                  />
                </div>
                <div data-aos="fade-left" className="space-y-6 text-center">
                  <h2 className="Kalnia text-5xl font-semibold text-SecondaryColor selection:bg-SecondaryColor selection:text-AlmostBlack">
                    {data.title}
                  </h2>
                  <p className="font-light selection:bg-AlmostWhite selection:text-AlmostBlack">
                    {data.desc}
                  </p>
                  <div className="flex select-none items-center justify-center gap-5">
                    <Link
                      to={data.linkDemo}
                      className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-AlmostWhite/5 px-4 py-2 transition hover:bg-AlmostWhite/20"
                    >
                      <ExternalLink />
                      Demo
                    </Link>
                    <Link
                      to={data.linkCode}
                      className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-AlmostWhite/5 px-4 py-2 transition hover:bg-AlmostWhite/20"
                    >
                      <Code />
                      Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="pb-10 text-center">
        <p>copyright &copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>
    </main>
  );
};

export default App;
