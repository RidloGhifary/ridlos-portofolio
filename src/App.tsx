import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import axios from "axios";

import BackgroundPattern from "./components/BackgroundPattern";
import NameTypeAnimation from "./components/NameTypeAnimation";
import SkillList from "./components/SkillList";
import Links from "./components/Links";
import ChangeLanguage from "./components/ChangeLanguage";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();

  useGSAP(() => {
    gsap.from(".line", {
      scrollTrigger: {
        trigger: ".loading-screen",
        scrub: true,

        pin: true,
        start: "top top",
        end: "+=150%",
      },
      scaleX: 0,
      transformOrigin: "left center",
      ease: "none",
    });
  });

  // TODO HANDLE SWITCH LANGUAGE
  const handleChangeLanguage = () => {
    const nextLanguage = i18n.language === "en" ? "id" : "en";
    i18n.changeLanguage(nextLanguage);
  };

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        await axios.get(
          "https://portfoliobackend-mv27ok25f-ridloghifarys-projects.vercel.app/api/track",
        );
      } catch (error) {
        console.error("Error tracking visitor", error);
      }
    };

    trackVisitor();
  }, []);

  return (
    <main className="overflow-hidden bg-AlmostBlack text-AlmostWhite">
      <BackgroundPattern />
      <ChangeLanguage handleChangeLanguage={handleChangeLanguage} />

      <div
        className="mx-auto max-w-4xl px-4 lg:px-0 2xl:max-w-6xl"
        ref={contentRef}
      >
        <section className="relative flex min-h-screen select-none flex-col items-start justify-center pt-20 md:items-start md:justify-end md:py-2 md:pt-0">
          <h1
            id="scramble"
            data-aos="fade-down"
            data-aos-delay="100"
            className="Kalnia select-none text-7xl font-bold selection:bg-AlmostWhite selection:text-AlmostBlack md:text-9xl 2xl:text-[11rem]"
          >
            <span className="text-6xl">{t("greeting")}</span>
            <br />
            <NameTypeAnimation />
          </h1>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <p
              data-aos="fade-down"
              data-aos-delay="200"
              className="text-xs leading-7 selection:bg-AlmostWhite selection:text-AlmostBlack sm:text-sm md:text-base 2xl:text-lg"
            >
              {t("bio")}
            </p>
            <SkillList />
          </div>

          <Links />
        </section>

        <div className="loading-screen">
          <div className="line" />
        </div>

        <Projects t={t} />
      </div>

      <Footer />
    </main>
  );
};

export default App;
