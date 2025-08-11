// src/sections/Experience.jsx
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Diliate",
      role: "Web Developer",
      date: "April 2024 – Feb 2025",
      points: [
        "Developed responsive, modern websites using HTML, CSS, JavaScript, and frameworks.",
        "Maintained and optimized existing websites for performance, security, and functionality.",
        "Communicated with clients to gather requirements and deliver clear technical documentation.",
      ],
    },
    {
      company: "Enord Aerospace",
      role: "Web Developer Intern",
      date: "April – June 2023",
      points: [
        "Supported debugging, testing, and code review processes to ensure website performance.",
        "Maintained and updated web pages with cross-browser and mobile compatibility.",
        "Collaborated with the dev team to implement features and improve UI/UX design.",
      ],
    },
    {
      company: "Ardent Computech Pvt. Ltd.",
      role: "Web Development Intern",
      date: "June – July 2023",
      points: [
        "Assisted in backend integration using PHP and MySQL for dynamic web applications.",
        "Participated in agile meetings, sprint planning, and team code reviews.",
        "Helped design user interfaces and contributed to front-end development tasks.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-black text-gray-800 dark:text-white"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#DA9928] mb-12">
          Experience
        </h2>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-700 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">
                  {exp.role} – <span className="text-[#DA9928]">{exp.company}</span>
                </h3>
                <p className="text-sm">{exp.date}</p>
              </div>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
