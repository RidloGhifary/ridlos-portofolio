import React from "react";
import projectList from "../assets/projects.json";
import { Code, ExternalLink } from "lucide-react";
import toast from "react-hot-toast";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Projects: React.FC<{ t: any }> = ({ t }) => {
  return (
    <section className="py-40" id="main-element">
      <h1
        data-aos="fade-down"
        className="Kalnia custom-h1 text-center text-6xl font-bold uppercase selection:bg-AlmostBlack selection:text-AlmostWhite before:stroke-AlmostWhite md:text-8xl"
      >
        {t("project")}
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
              <p className="font-light capitalize selection:bg-AlmostWhite selection:text-AlmostBlack">
                {t(
                  `${data.title === "GymSync" ? "gymSyncDescription" : "carRentalDescription"}`,
                )}
              </p>
              <div className="flex select-none items-center justify-center gap-5">
                <button
                  onClick={() =>
                    data.linkDemo
                      ? window.open(data.linkDemo, "_blank")
                      : toast.error("Demo is not available")
                  }
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-AlmostWhite/5 px-4 py-2 capitalize transition hover:bg-AlmostWhite/20"
                >
                  <ExternalLink />
                  {t("demo")}
                </button>
                <button
                  onClick={() =>
                    data.linkCode
                      ? window.open(data.linkCode, "_blank")
                      : toast.error("Code is not available")
                  }
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-AlmostWhite/5 px-4 py-2 capitalize transition hover:bg-AlmostWhite/20"
                >
                  <Code />
                  {t("code")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
