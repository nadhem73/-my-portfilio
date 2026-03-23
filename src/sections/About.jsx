import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

// Import des images
import csharpPink from "../assets/assets/logos/csharp-pink.png";
import dotnetPink from "../assets/assets/logos/dotnet-pink.png";
import blazorPink from "../assets/assets/logos/blazor-pink.png";
import codingPov from "../assets/assets/coding-pov.png";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src={codingPov}
            alt="Coding illustration"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Nadhem Hmida</p>
            <p className="subtext">
              Over the last 4 years, I developed my frontend and backend dev
              skills to deliver dynamic and software and web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            {/* Central SKILLS text */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <p className="text-4xl font-bold text-gray-400/60 tracking-wider">
                SKILLS
              </p>
            </div>

            {/* Cards arranged in circle around SKILLS */}
            {/* Top */}
            <Card
              style={{
                rotate: "15deg",
                top: "8%",
                left: "42%",
                transform: "scale(0.85)"
              }}
              text="React"
              containerRef={grid2Container}
            />

            {/* Top Right */}
            <Card
              style={{
                rotate: "-20deg",
                top: "18%",
                left: "68%",
                transform: "scale(0.8)"
              }}
              text="JavaScript"
              containerRef={grid2Container}
            />

            {/* Right */}
            <Card
              style={{
                rotate: "25deg",
                top: "45%",
                left: "78%",
                transform: "scale(0.85)"
              }}
              image={csharpPink}
              containerRef={grid2Container}
            />

            {/* Bottom Right */}
            <Card
              style={{
                rotate: "-35deg",
                top: "72%",
                left: "65%",
                transform: "scale(0.8)"
              }}
              text="Spring Boot"
              containerRef={grid2Container}
            />

            {/* Bottom */}
            <Card
              style={{
                rotate: "30deg",
                top: "85%",
                left: "38%",
                transform: "scale(0.85)"
              }}
              text="PostgreSQL"
              containerRef={grid2Container}
            />

            {/* Bottom Left */}
            <Card
              style={{
                rotate: "-25deg",
                top: "75%",
                left: "12%",
                transform: "scale(0.8)"
              }}
              image={dotnetPink}
              containerRef={grid2Container}
            />

            {/* Left */}
            <Card
              style={{
                rotate: "40deg",
                top: "48%",
                left: "5%",
                transform: "scale(0.85)"
              }}
              text="Angular"
              containerRef={grid2Container}
            />

            {/* Top Left */}
            <Card
              style={{
                rotate: "-30deg",
                top: "22%",
                left: "18%",
                transform: "scale(0.8)"
              }}
              image={blazorPink}
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools taht
              allow me to build robust and scalable applications and websites
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
