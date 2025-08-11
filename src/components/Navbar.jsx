import { IoMdHome } from "react-icons/io";
import { FaRegUser, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { SiCodefactor } from "react-icons/si";
import { BsChatText } from "react-icons/bs";

const navItems = [
  { id: "intro", icon: <IoMdHome />, label: "Home" },
  { id: "about", icon: <FaRegUser />, label: "About" },
  { id: "skills", icon: <FaLaptopCode />, label: "Skills" },
  { id: "projects", icon: <AiOutlineCodeSandbox />, label: "Projects" },
  { id: "education", icon: <FaGraduationCap />, label: "Education" },
  { id: "experience", icon: <SiCodefactor />, label: "Experience" },
  { id: "contact", icon: <BsChatText />, label: "Contact" },
];

export default function Navbar() {
  return (
    <div
      className="
        fixed top-4 left-1/2 transform -translate-x-1/2
        bg-white/20 dark:bg-white/10
        backdrop-blur-lg
        border border-gray-300 dark:border-transparent
        rounded-full
        px-4 sm:px-8
        py-2 sm:py-4
        flex gap-4 sm:gap-8
        z-50
        transition-all duration-300
      "
    >
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="text-gray-700 dark:text-gray-300 hover:text-[#DAA520] text-lg sm:text-xl md:text-2xl transition duration-200"
          title={item.label}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
