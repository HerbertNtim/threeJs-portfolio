import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { HackerRoom } from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";

const Hero = () => (
  <section className="w-full min-h-screen flex flex-col relative">
    <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
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
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <HackerRoom />
        </Suspense>
      </Canvas>
    </div>
  </section>
);

export default Hero;
