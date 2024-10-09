"use client";

import { useEffect, useState } from "react";
import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/particles";
import { ChevronRight, Sun, SunMoon, Languages } from "lucide-react";
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  return (
    
    <div className={`flex justify-center flex-col h-screen ${isDarkMode ? 'bg-[#1D1B31]' : 'bg-white'} max-h-screen`}>
      <div className="w-full md:w-1/2 p-12 text-left">
        <div className="flex gap-4 mb-4">
          <Button onClick={toggleTheme}>
            {isDarkMode ? (language === "es" ? <Sun/> : <Sun/>) : (language === "es" ? <SunMoon/> : <SunMoon/>)}
          </Button>
          <Button onClick={toggleLanguage}>
            {language === "es" ? <Languages />
 : <Languages />
}
          </Button>
        </div>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div>
            <h1 className="bg-title-gradient bg-clip-text text-transparent font-bold text-5xl md:text-[4rem]">
              Miguel Monterroso
            </h1>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div>
            <p className={`${isDarkMode ? 'text-subtitle' : 'text-black'} text-2xl mt-4`}>
              {language === "es" ? "Desarrollador Web" : "Web Developer"}
            </p>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mb-5">
            <h2 className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'} text-lg font-light mt-6`}>
              {language === "es" ? (
                <>
                  Desarrollador web con más de 5 años de experiencia en{" "}
                  <span className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'} font-semibold`}>
                    React
                  </span>
                  ,{" "}
                  <span className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'} font-semibold`}>
                    TypeScript
                  </span>
                  , y{" "}
                  <span className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'} font-semibold`}>
                    Tailwind
                  </span>
                </>
              ) : (
                <>
                  Web developer with over 5 years of experience in{" "}
                  <span className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'} font-semibold`}>
                    React
                  </span>
                  ,{" "}
                  <span className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'} font-semibold`}>
                    TypeScript
                  </span>
                  , and{" "}
                  <span className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'} font-semibold`}>
                    Tailwind
                  </span>
                </>
              )}
            </h2>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div>
            <Button className={`${isDarkMode ? 'bg-button-dark hover:bg-hover-dark' : 'bg-gray-800 hover:bg-gray-700'}`}>
              {language === "es" ? "Conocer más" : "Learn More"}
              <ChevronRight />
            </Button>
          </div>
        </BoxReveal>

        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={isDarkMode ? '#ffffff' : '#000000'}
          refresh
        />
      </div>
    </div>
  );
}
