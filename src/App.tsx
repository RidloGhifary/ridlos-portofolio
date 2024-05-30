import { Code, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import projectList from "./assets/projects.json";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
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
    <main className="bg-AlmostBlack text-AlmostWhite overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        <section className="relative flex min-h-screen flex-col items-start justify-center pt-20 md:items-start md:justify-end md:py-2 md:pt-0">
          <h1
            data-aos="fade-down"
            className="Kalnia selection:bg-AlmostWhite selection:text-AlmostBlack text-7xl font-bold md:text-9xl"
          >
            H`i
            <br />
            I`M Ridlo
          </h1>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <p
              data-aos="fade-down"
              className="selection:bg-AlmostWhite selection:text-AlmostBlack leading-7"
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
                  className="bg-SecondaryColor select-none rounded-xl px-4 py-2 font-semibold text-white"
                  key={data}
                >
                  #{data}
                </span>
              ))}
            </div>
          </div>

          <ul
            data-aos="fade-left"
            className="selection:bg-AlmostWhite selection:text-AlmostBlack absolute right-[50%] top-0 mt-3 flex translate-x-[50%] gap-14 lg:-right-28 lg:top-[30%] lg:mt-0 lg:translate-x-0 lg:flex-col"
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
            className="Kalnia selection:bg-AlmostWhite selection:text-AlmostBlack before:stroke-AlmostWhite text-center text-4xl font-bold uppercase md:text-7xl"
          >
            project
          </h1>
          <div className="space-y-6">
            {projectList?.map((data, index: number) => (
              <div
                data-aos="fade-up"
                className="border-AlmostWhite/50 mt-16 grid items-center gap-4 rounded-xl border p-5 md:grid-cols-2"
                key={index}
              >
                <div
                  data-aos="fade-right"
                  className={`border-AlmostWhite ${index % 2 === 0 ? "order-last" : null} cursor-pointer select-none rounded-lg`}
                >
                  <img
                    src={data.image}
                    alt={data.title}
                    className="h-[300px] w-full rounded-lg object-cover object-top transition-all duration-[7s] ease-linear hover:object-bottom"
                  />
                </div>
                <div data-aos="fade-left" className="space-y-6 text-center">
                  <h2 className="Kalnia text-SecondaryColor selection:bg-SecondaryColor selection:text-AlmostBlack text-5xl font-semibold">
                    {data.title}
                  </h2>
                  <p className="selection:bg-AlmostWhite selection:text-AlmostBlack font-light">
                    {data.desc}
                  </p>
                  <div className="flex select-none items-center justify-center gap-5">
                    <Link
                      to={data.linkDemo}
                      className="hover:bg-AlmostWhite/20 bg-AlmostWhite/5 flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2 transition"
                    >
                      <ExternalLink />
                      Demo
                    </Link>
                    <Link
                      to={data.linkCode}
                      className="hover:bg-AlmostWhite/20 bg-AlmostWhite/5 flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2 transition"
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
