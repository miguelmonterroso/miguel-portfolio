"use client";

import { useEffect, useState, useRef } from "react";
import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/particles";
import {
  ChevronRight,
  Sun,
  SunMoon,
  Languages,
  Linkedin,
  Github,
  HomeIcon,
  Mail,
  Download,
  ArrowDown,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState("en");
  const [hasMounted, setHasMounted] = useState(false);
  const scrollTargetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted) {
      const rootElement = document.documentElement;
      if (isDarkMode) {
        rootElement.classList.add("dark");
      } else {
        rootElement.classList.remove("dark");
      }
    }
  }, [isDarkMode, hasMounted]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Desplazamiento suave
    });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  const handleLearnMoreClick = () => {
    if (scrollTargetRef.current) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: scrollTargetRef.current, offsetY: 0 },
        ease: "power2.out",
      });
    }
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <div
      className={`h-full relative ${isDarkMode ? "bg-[#1D1B31]" : "bg-white"}`}
    >
      <div className="absolute w-full h-full">
        <Dock direction="middle" className="dock-sticky">
          <DockIcon>
            <HomeIcon onClick={scrollToTop}/>
          </DockIcon>
          <Separator orientation="vertical" />
          <DockIcon>
            <Link
              href="https://www.linkedin.com/in/migueldevgt/"
              target="blank"
            >
              <Linkedin />
            </Link>
          </DockIcon>
          <DockIcon>
            <Link href="https://github.com/miguelmonterroso" target="blank">
              <Github />
            </Link>
          </DockIcon>
          <DockIcon>
            <a href="mailto:lokismind@gmail.com">
              {" "}
              <Mail />
            </a>
          </DockIcon>
          <Separator orientation="vertical" />

          <DockIcon>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  {isDarkMode ? (
                    <Sun onClick={toggleTheme} />
                  ) : (
                    <SunMoon onClick={toggleTheme} />
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {isDarkMode
                      ? language === "es"
                        ? "Cambiar a modo claro"
                        : "Switch to light mode"
                      : language === "es"
                      ? "Cambiar a modo oscuro"
                      : "Switch to dark mode"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DockIcon>
          <DockIcon>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Languages onClick={toggleLanguage} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{language === "es" ? "English" : "Español"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DockIcon>
        </Dock>
      </div>

      <div className="h-full w-full " id="top">
        <div className="w-full md:w-full p-12 text-left h-screen flex flex-col justify-center">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div>
              <h1 className="bg-title-gradient bg-clip-text text-transparent font-bold text-5xl md:text-[4rem]">
                Miguel Monterroso
              </h1>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div>
              <p
                className={`${
                  isDarkMode ? "text-subtitle" : "text-black"
                } text-2xl mt-4`}
              >
                {language === "es" ? "Desarrollador Web" : "Web Developer"}
              </p>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mb-5">
              <h2
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-800"
                } text-lg font-light mt-6`}
              >
                {language === "es" ? (
                  <>
                    Desarrollador web con más de 5 años de experiencia en{" "}
                    <span
                      className={`${
                        isDarkMode ? "text-purple-400" : "text-purple-600"
                      } font-semibold`}
                    >
                      React
                    </span>
                    ,{" "}
                    <span
                      className={`${
                        isDarkMode ? "text-purple-400" : "text-purple-600"
                      } font-semibold`}
                    >
                      TypeScript
                    </span>
                    , y{" "}
                    <span
                      className={`${
                        isDarkMode ? "text-purple-400" : "text-purple-600"
                      } font-semibold`}
                    >
                      Tailwind
                    </span>
                  </>
                ) : (
                  <>
                    Web developer with over 5 years of experience in{" "}
                    <span
                      className={`${
                        isDarkMode ? "text-purple-400" : "text-purple-600"
                      } font-semibold`}
                    >
                      React
                    </span>
                    ,{" "}
                    <span
                      className={`${
                        isDarkMode ? "text-purple-400" : "text-purple-600"
                      } font-semibold`}
                    >
                      TypeScript
                    </span>
                    , and{" "}
                    <span
                      className={`${
                        isDarkMode ? "text-purple-400" : "text-purple-600"
                      } font-semibold`}
                    >
                      Tailwind
                    </span>
                  </>
                )}
              </h2>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="gap-4 flex">
              <Button
                onClick={handleLearnMoreClick}
                className={`${
                  isDarkMode
                    ? "bg-button-dark hover:bg-hover-dark"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {language === "es" ? "Conocer más" : "Learn More"}
                <ChevronRight />
              </Button>
              <Button
                className={`${
                  isDarkMode
                    ? "bg-button-dark hover:bg-hover-dark"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {language === "es" ? "Descargar CV" : "Download CV"}
                <Download className="ml-2" />
              </Button>
            </div>
          </BoxReveal>
        </div>

        <div ref={scrollTargetRef} className="h-[200vh] relative flex flex-col  p-12">
          <div className=" h-screen flex justify-center flex-col">
          <h2 className="bg-title-gradient bg-clip-text text-transparent font-bold text-5xl md:text-[4rem]">{language === "es" ? "Sobre mi" : "About me"}
          </h2>
          <p className={`${
                  isDarkMode ? "text-subtitle" : "text-black"
                } text-lg mt-4`}>
          {language === "es" ? `Soy un desarrollador web full stack con 5 años de experiencia, siempre motivado por el aprendizaje y la innovación. A lo largo de mi carrera, me he encontrado con diversos desafíos técnicos y profesionales, desde problemas complejos de integración hasta la optimización de sistemas a gran escala. Estos retos me han permitido crecer y desarrollar habilidades para adaptarme rápidamente a nuevas tecnologías y entornos de trabajo. Manejo un amplio conjunto de herramientas, como JavaScript, React, Next.js, Tailwind, Sass y Angular, que me permiten crear soluciones robustas tanto en frontend como en backend. Me apasiona resolver problemas y mejorar la eficiencia en cada etapa del desarrollo. Busco constantemente nuevos retos que me permitan seguir evolucionando y contribuir de manera significativa a los proyectos en los que participo. Mi enfoque no es solo cumplir con las expectativas, sino superarlas, creando productos que generen impacto real y aporten valor a los usuarios y al equipo de desarrollo.` : "I am a full stack web developer with 5 years of experience, always driven by learning and innovation. Throughout my career, I’ve encountered various technical and professional challenges, from complex integration issues to large-scale system optimization. These challenges have allowed me to grow and develop the ability to quickly adapt to new technologies and work environments. I work with a wide range of tools, including JavaScript, React, Next.js, Tailwind, Sass, and Angular, which enable me to build robust solutions on both the frontend and backend. I am passionate about solving problems and improving efficiency at every stage of development. I am constantly seeking new challenges that will help me continue evolving and contribute meaningfully to the projects I take on. My focus is not just to meet expectations, but to exceed them, creating products that deliver real impact and add value for both users and the development team."}
          </p>
          <p className="self-center text-center">Skills</p>
          <ArrowDown className="self-center"/>
          </div>
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color={isDarkMode ? "#ffffff" : "#000000"}
            refresh
          />
          
        </div>

        <div className="h-screen relative flex items-end p-12">
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color={isDarkMode ? "#ffffff" : "#000000"}
            refresh
          />
        </div>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={isDarkMode ? "#ffffff" : "#000000"}
        refresh
      />
    </div>
  );
}
