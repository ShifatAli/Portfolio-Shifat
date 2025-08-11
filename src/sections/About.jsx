/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import lightProfile from "../assets/about-light.png";
import darkProfile from "../assets/about-dark.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 bg-white dark:bg-black text-black dark:text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-12 items-center">

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 w-full flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full max-w-[600px]"
          >
            {/* Light Image */}
            <img
              src={lightProfile}
              alt="About Light"
              className="block dark:hidden w-full rounded-2xl object-contain"
            />
            {/* Dark Image */}
            <img
              src={darkProfile}
              alt="About Dark"
              className="hidden dark:block w-full rounded-2xl object-contain shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 w-full space-y-6 text-center md:text-left"
        >
          <div>
            <h2 className="text-4xl font-bold text-[#DA9928] mb-2">About Me</h2>
            <div className="h-1 w-20 bg-[#DA9928] rounded-full mb-4 mx-auto md:mx-0"></div>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I'm a passionate full-stack developer dedicated to building modern,
            fast, and user-friendly web applications using the MERN stack.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I enjoy transforming complex problems into intuitive designs and
            functional solutions, with a strong emphasis on performance and UX.
          </p>

          {/* TECH STACK ICONS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            {[FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaDatabase].map(
              (Icon, index) => (
                <motion.span
                  key={index}
                  className="text-3xl cursor-pointer"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon
                    className={
                      Icon === FaReact
                        ? "text-[#61DBFB]"
                        : Icon === FaNodeJs
                        ? "text-[#68A063]"
                        : Icon === FaJs
                        ? "text-[#F0DB4F]"
                        : Icon === FaHtml5
                        ? "text-[#E34F26]"
                        : Icon === FaCss3Alt
                        ? "text-[#264de4]"
                        : "text-[#4DB33D]"
                    }
                  />
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
