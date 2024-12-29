import motion, { useAnimate } from "framer-motion"
import { useEffect } from "react";


export default function Progresse() {

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const controls = animate([
      [scope.current, { x: "100%" }],
      ["li", { opacity: 1 }],
    ]);

    controls.speed = 0.8;

    return () => controls.stop();
  }, []);

  return (
    <>
      
    </>
  );
}
