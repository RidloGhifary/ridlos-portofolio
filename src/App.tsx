import React, { useEffect, useRef, useState } from "react";
import { Code, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fscreen from "fscreen";
import { useTranslation } from "react-i18next";

import projectList from "./assets/projects.json";
import BackgroundPattern from "./components/BackgroundPattern";
import NameTypeAnimation from "./components/NameTypeAnimation";
import SkillList from "./components/SkillList";
import Links from "./components/Links";
import Toast from "./components/Toast";

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  console.log("🚀 ~ isFullScreen:", isFullScreen);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // SCROLL ANIMATIION LINE
    gsap.from(".line-2", {
      scrollTrigger: {
        trigger: ".orange",
        scrub: true,

        pin: true,
        start: "top top",
        end: "+=200%",
      },
      scaleX: 0,
      transformOrigin: "left center",
      ease: "none",
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".purple",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%",
      },
    });
  });

  // TODO HANDLE FULLSCREEN FUNCTIONALITY
  useEffect(() => {
    if (fscreen.fullscreenEnabled) {
      fscreen.addEventListener("fullscreenchange", handlerFullScreen, false);
    }

    return () => {
      if (fscreen.fullscreenEnabled) {
        fscreen.removeEventListener(
          "fullscreenchange",
          handlerFullScreen,
          false,
        );
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === " ") {
        toggleFullscreen();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (fscreen.fullscreenEnabled) {
      fscreen.addEventListener("fullscreenchange", handlerFullScreen, false);
    }

    return () => {
      if (fscreen.fullscreenEnabled) {
        fscreen.removeEventListener(
          "fullscreenchange",
          handlerFullScreen,
          false,
        );
      }
    };
  }, []);

  function handlerFullScreen() {
    if (fscreen.fullscreenElement !== null) {
      setIsFullScreen(true);
    } else {
      setIsFullScreen(false);
    }
  }

  const toggleFullscreen = () => {
    if (fscreen.fullscreenElement) {
      fscreen.exitFullscreen();
    } else {
      if (contentRef.current) {
        fscreen.requestFullscreen(contentRef.current);
      }
    }
  };
  // TODO FINISH LINE HANDLE FULLSCREEN FUNCTIONALITY

  // TODO HANDLE SWITCH LANGUAGE
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "t") {
      event.preventDefault();
      const nextLanguage = i18n.language === "en" ? "id" : "en";
      i18n.changeLanguage(nextLanguage);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [i18n.language]);
  // TODO FINISH LINE HANDLE SWITCH LANGUAGE

  useEffect(() => {
    Toast.fire({
      icon: "info",
      titleText: "Change language",
      html: "Press down <b><i>ctrl+t</i></b> for changing the language",
    });
  }, []);

  return (
    <main className="overflow-hidden bg-AlmostBlack text-AlmostWhite">
      <BackgroundPattern />

      <div className="mx-auto max-w-4xl px-4 lg:px-0" ref={contentRef}>
        <section className="relative flex min-h-screen flex-col items-start justify-center pt-20 md:items-start md:justify-end md:py-2 md:pt-0">
          <h1
            id="scramble"
            data-aos="fade-down"
            data-aos-delay="100"
            className="Kalnia text-7xl font-bold selection:bg-AlmostWhite selection:text-AlmostBlack md:text-9xl"
          >
            <span className="text-6xl">{t("greeting")}</span>
            <br />
            <NameTypeAnimation />
          </h1>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <p
              data-aos="fade-down"
              data-aos-delay="200"
              className="text-xs leading-7 selection:bg-AlmostWhite selection:text-AlmostBlack sm:text-sm md:text-base"
            >
              {t("bio")}
            </p>
            <SkillList />
          </div>

          <Links />
        </section>

        <div className="orange">
          <div className="line line-2" />
        </div>

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
                    <Link
                      to={data.linkDemo}
                      className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-AlmostWhite/5 px-4 py-2 capitalize transition hover:bg-AlmostWhite/20"
                    >
                      <ExternalLink />
                      {t("demo")}
                    </Link>
                    <Link
                      to={data.linkCode}
                      className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-AlmostWhite/5 px-4 py-2 capitalize transition hover:bg-AlmostWhite/20"
                    >
                      <Code />
                      {t("code")}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="pb-10 text-center">
        <p>copyright &copy; {new Date().getFullYear()} All Rights Reserved</p>
      </footer>
    </main>
  );
};

export default App;
