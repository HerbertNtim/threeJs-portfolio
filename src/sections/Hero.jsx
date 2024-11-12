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

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="w-full min-h-screen flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-10 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium dark:text-white text-center font-generalsans">
          Hi, I am Herbert <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient-light dark:text-gray_gradient">
          Transforming Ideas into Reality
        </p>
      </div>

      <div className="w-full h-full inset-0 absolute">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0.1, -Math.PI, 0]}
            />    
          
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
    </section>
  );
};

export default Hero;
