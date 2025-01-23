import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { HackerRoom } from "../components/HackerRoom";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import CanvasLoader from "../components/CanvasLoader";
import { calculateSizes } from "../constant";
import Target from "../components/Target";
import ReactLogo from "./ReactLogo";
import Cube from "./Cube";
import Rings from "./Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="w-full min-h-screen flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-10 c-space">
        <p className="sm:text-3xl text-2xl font-medium dark:text-white text-center font-generalsans">
          Hi, I am Herbert <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient-light dark:text-gray_gradient">
          A Software Developer
        </p>
        <p className="text-center  text-gray_gradient-light dark:text-gray_gradient leading-4 text-md">Transforming ideas into reality</p>
      </div>

      <div className="w-full h-full inset-0 absolute">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let Me Introduce Myself" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
