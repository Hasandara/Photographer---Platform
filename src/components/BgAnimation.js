import { motion } from 'framer-motion';

const BgAnimation = () => {
  return (
    <>
      {/* Top Background Animation */}
      <motion.div
        initial={{
          width: 0, // Start with no width
        }}
        animate={{
          width: '100vw', // Animate to full screen width
        }}
        transition={{
          duration: 1.1, // Animation duration
          ease: 'easeInOut', // Smoother animation
          delay: 0.2, // Small delay before animation starts
        }}
        className="bg-gradient-to-b from-gray-200 to-gray-400 h-screen absolute top-0 left-0 z-[-1]"
      ></motion.div>

      {/* Bottom Animation Bar */}
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: '100vw', // Change to full viewport width
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          delay: 0.7,
        }}
        className="bg-gray-800 border-t-2 border-gray-600 h-[20vh] absolute left-0 bottom-0 z-20"
      ></motion.div>

      {/* Last Motion Div with Fixes */}
      <motion.div
        initial={{
          x: '-100vw', // Start off the screen to the left
          rotateZ: 20, // Slight tilt
        }}
        animate={{
          x: 0, // Animate to the center position
          rotateZ: 0, // Straighten the tilt
        }}
        transition={{
          duration: 1, // Duration of the animation
          ease: 'easeInOut', // Smoother animation
          delay: 0.9, // Delay before the animation starts
        }}
        className="bg-gray-800 h-[170vh] w-[60vw] z-10 absolute -left-[10vw] -top-[50vh]"
      ></motion.div>
    </>
  );
};

export default BgAnimation;
