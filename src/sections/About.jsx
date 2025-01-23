import { useState } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button.jsx";
import TechButton from "../components/TechButton.jsx";
import { list } from "postcss";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const techText = [
    {
      index: 1,
      name: "Languages",
      list: "Language"
    },
    {
      index: 2,
      name: "Frontend",
      list: "Frontend"
    },
    {
      index: 3,
      name: "Backend",
      list: "Backend"
    },
    {
      index: 4,
      name: "DevOps",
      list: "DevOps"
    },
  ];


  const [activeTech, setActiveTech] = useState(techText[0]);

  const handleTechClick = (tech) => {
    setActiveTech(tech);
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText("herbertntim2023@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-24" id="about">
      <h1 className="text-white text-3xl font-bold py-4 mb-4">About Me</h1>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[270px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I&apos;m Herbert Ntim</p>
              <p className="grid-subtext">
                With a degree in Computer Engineering (KNUST) and 2 years of
                experience, I&apos;ve built a strong foundation in software
                development through academic projects and internships. I&apos;m
                eager to apply my skills and keep growing in both independent
                and collaborative roles.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="mt-2">
              <h2 className="grid-headtext">Tech Stack</h2>
              <img
                src="assets/grid2.png"
                alt="grid-2"
                className="w-full sm:h-[276px] h-fit object-contain"
              />

              <div className="flex gap-3 flex-col">
                <div className="flex items-center gap-2">
                  {techText.map((tech) => (
                    <TechButton key={tech.index} name={tech.name} onClick={() => handleTechClick(tech)}
                    isActive={activeTech.index === tech.index} isBeam={activeTech.index === tech.index}/>
                  ))}
                </div>
                <div className="text-white m">{activeTech && activeTech.list}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: "Kumasi, Ghana",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Kumasi, Ghana and open to remote work
                worldwide.
              </p>
              <a href="#work">
                <Button
                  name="View My Projects"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  herbertntim2023@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
