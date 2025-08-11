// src/sections/Skills.jsx
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiGit, SiFramer, SiNextdotjs
} from "react-icons/si";
import { FaUsers, FaComments, FaLightbulb, FaClock } from "react-icons/fa";

export default function Skills() {
  const hardSkills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "Express", icon: <SiExpress className="text-gray-700 dark:text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
    { name: "Git", icon: <SiGit className="text-red-500" /> },
  ];

  const softSkills = [
    { name: "Teamwork", icon: <FaUsers /> },
    { name: "Communication", icon: <FaComments /> },
    { name: "Creativity", icon: <FaLightbulb /> },
    { name: "Time Management", icon: <FaClock /> },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-black text-gray-800 dark:text-white">
      <motion.div
        className="max-w-5xl mx-auto space-y-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* === HEADER === */}
        <motion.div
          className="text-center"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-[#DA9928]">
            My Skills
          </h2>
        </motion.div>

        {/* === HARD SKILLS === */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {hardSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center gap-2 bg-white dark:bg-gray-900 p-4 rounded-lg shadow hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <div className="text-3xl">{skill.icon}</div>
                <p className="text-sm font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* === SOFT SKILLS === */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center gap-2 bg-white dark:bg-gray-900 p-4 rounded-lg shadow hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-2xl text-indigo-500 dark:text-indigo-300">{skill.icon}</div>
                <p className="text-sm font-medium text-center">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
