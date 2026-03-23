import { Canvas, useFrame } from "@react-three/fiber";
import { memo, useMemo, Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Float } from "@react-three/drei";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Astronaut } from "../components/Astronaut";
import Loader from "../components/Loader";

const Rig = memo(() => {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
  return null;
});

Rig.displayName = "Rig";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 }, undefined, (matches) => matches);
  
  const astronautProps = useMemo(() => ({
    scale: isMobile ? 0.23 : 0.3,
    position: isMobile ? [0, -1.5, 0] : [1.3, -1, 0]
  }), [isMobile]);

  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas 
          camera={{ position: [0, 1, 3] }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={<Loader />}>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
              <Astronaut {...astronautProps} />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

export default memo(Hero);
