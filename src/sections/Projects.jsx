import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import DemoComputer from '../components/DemoComputer.jsx';
import { web_mobile, data_science } from '../constant/index.js';
import CanvasLoader from '../components/CanvasLoader.jsx';
import SkillButton from '../components/SkillButton.jsx';

const PROJECT_TYPES = {
  WEB: 'web',
  DATA: 'data',
};

const PROJECTS = {
  [PROJECT_TYPES.WEB]: web_mobile,
  [PROJECT_TYPES.DATA]: data_science,
};

const Projects = () => {
  const [projectType, setProjectType] = useState(PROJECT_TYPES.WEB);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const containerRef = useRef(null);

  const projects = PROJECTS[projectType];
  const projectCount = projects.length;
  const currentProject = projects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prev) => {
      if (direction === 'previous') {
        return prev === 0 ? projectCount - 1 : prev - 1;
      }
      return prev === projectCount - 1 ? 0 : prev + 1;
    });
  };

  const handleProjectTypeChange = (type) => {
    setProjectType(type);
    setSelectedProjectIndex(0);
  };

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current.querySelectorAll('.animatedText'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
        }
      );
    },
    [projectType, selectedProjectIndex]
  );

  if (!currentProject) return null;

  return (
    <section className="c-space my-20" id="work" ref={containerRef}>
      <div className="flex justify-between items-center">
        <p className="head-text">My Selected Work</p>

        <div className="flex items-center gap-8">
          <SkillButton
            name="Web / Mobile Dev"
            onClick={() => handleProjectTypeChange(PROJECT_TYPES.WEB)}
            isBeam={projectType === PROJECT_TYPES.WEB}
          />
          <SkillButton
            name="Data Science"
            onClick={() => handleProjectTypeChange(PROJECT_TYPES.DATA)}
            isBeam={projectType === PROJECT_TYPES.DATA}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 bg-black-300 dark:bg-transparent">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              className="w-10 h-10 shadow-sm"
              src={currentProject.logo}
              alt="logo"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag) => (
                <div key={tag.name} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
