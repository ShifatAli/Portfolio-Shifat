import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React, Tailwind CSS, and Framer Motion.",
      image: "/images/portfolio.png",
      link: "https://yourportfolio.live",
    },
    {
      title: "Todo App",
      desc: "React CRUD Todo App with localStorage and reusable components.",
      image: "/images/todo.png",
      link: "https://todoproject.live",
    },
    {
      title: "Node API",
      desc: "REST API with Express.js, MongoDB, JWT auth, and proper routing.",
      image: "/images/nodeapi.png",
      link: "https://nodeapi.live",
    },
    {
      title: "E-commerce UI",
      desc: "Responsive e-commerce frontend with filtering and cart system.",
      image: "/images/ecommerce.png",
      link: "https://ecommercesite.live",
    },
    {
      title: "Blog Platform",
      desc: "MERN stack blog with markdown support and user management.",
      image: "/images/blog.png",
      link: "https://blogplatform.live",
    },
    {
      title: "Chat App",
      desc: "Real-time group chat app using Socket.IO, React, and Node.js.",
      image: "/images/chatapp.png",
      link: "https://chatapp.live",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-black text-gray-800 dark:text-white"
    >
      <motion.div
        className="max-w-6xl mx-auto space-y-12"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-[#DA9928] mb-2">
            My Projects 💻
          </h2>
          <p className="text-white text-sm">
            A showcase of my development work
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-white">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm px-4 py-2 bg-[#DA9928] hover:bg-[#c9861f] text-white rounded-md transition"
                >
                  See Live →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
