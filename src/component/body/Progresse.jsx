import {motion, useScroll} from "framer-motion"

export default function Progresse() {

  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }} />
    </>
  );
}
