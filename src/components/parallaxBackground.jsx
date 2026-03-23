import { memo, useMemo } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import skyImage from "../assets/assets/sky.jpg";
import mountain3Image from "../assets/assets/mountain-3.png";
import planetsImage from "../assets/assets/planets.png";
import mountain2Image from "../assets/assets/mountain-2.png";
import mountain1Image from "../assets/assets/mountain-1.png";

const ParallaxBackground = memo(() => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  const layers = useMemo(() => [
    { image: skyImage, style: { y: undefined, x: undefined }, zIndex: -50 },
    { image: mountain3Image, style: { y: mountain3Y, x: undefined }, zIndex: -40 },
    { image: planetsImage, style: { y: undefined, x: planetsX }, zIndex: -30 },
    { image: mountain2Image, style: { y: mountain2Y, x: undefined }, zIndex: -20 },
    { image: mountain1Image, style: { y: mountain1Y, x: undefined }, zIndex: -10 },
  ], [mountain3Y, planetsX, mountain2Y, mountain1Y]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {layers.map((layer, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${layer.image})`,
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              zIndex: layer.zIndex,
              y: layer.style.y,
              x: layer.style.x,
              willChange: "transform"
            }}
          />
        ))}
      </div>
    </section>
  );
});

ParallaxBackground.displayName = "ParallaxBackground";

export default ParallaxBackground;
