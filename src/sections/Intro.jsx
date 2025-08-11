import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import lightProfile from "../assets/profile-light.png"; // for light mode
import darkProfile from "../assets/profile-dark.png";   // for dark mode

export default function Intro() {
  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white px-4 sm:px-6 pt-16 sm:pt-20 relative"
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 px-0 md:px-4">
        
        {/* LEFT CONTENT */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-8 md:pl-2 lg:pl-6 max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-500 dark:text-gray-400 uppercase tracking-widest font-medium mb-2">
            Hi, I’m
          </p>

          <h1 className="text-5xl sm:text-8xl font-extrabold leading-tight text-[#DA9928] dark:text-white">
            Shifat Ali
          </h1>

          <TypeAnimation
            sequence={[
              "Full-Stack Developer", 2500,
              "MERN Stack Enthusiast", 2500,
              "Clean UI Designer", 2500,
            ]}
            wrapper="span"
            speed={25} // slower typing
            repeat={Infinity}
            className="text-xl sm:text-3xl font-semibold text-[#DA9928] dark:text-[#DA9928] block"
          />

          <div className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto md:mx-0 space-y-4">
            <p>
              Building scalable, performant, and user-friendly web apps.
              Passionate about clean code and intuitive design and beautiful codes.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <motion.a
              href="/Shifat_ali_CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 border-2 border-[#DA9928] text-[#DA9928] rounded-md font-semibold transition-all duration-300 hover:bg-[#DA9928] hover:text-white"
            >
              My Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 border-2 border-[#DA9928] text-[#DA9928] rounded-md font-semibold transition-all duration-300 hover:bg-[#DA9928] hover:text-white"
            >
              Let’s Connect
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end items-start pt-6 md:pt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={lightProfile}
            alt="Shifat Ali Profile"
            className="block dark:hidden w-[380px] sm:w-[440px] md:w-[480px] lg:w-[520px] h-auto object-cover rounded-lg"
          />
          <img
            src={darkProfile}
            alt="Shifat Ali Profile"
            className="hidden dark:block w-[380px] sm:w-[440px] md:w-[480px] lg:w-[520px] h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Scroll Down */}
      <a
        href="#about"
        className="absolute bottom-6 right-6 sm:right-10 text-sm text-[#DA9928] hover:underline z-30"
      >
        Scroll Down ↓
      </a>
    </section>
  );
}
