import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function SocialBar() {
  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/shifatali/",
      label: "LinkedIn",
      color: "hover:text-[#0077B5]",
    },
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/ShifatAli",
      label: "GitHub",
      color: "hover:text-gray-800 dark:hover:text-white",
    },
    {
      icon: <FaTwitter size={20} />,
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:text-[#1DA1F2]",
    },
  ];

  return (
    <div className="hidden md:flex fixed top-1/2 left-0 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center gap-4 p-2 rounded-r-xl bg-white dark:bg-[#111] shadow-lg border border-gray-200 dark:border-gray-700">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={`text-gray-500 dark:text-gray-400 transition duration-300 ${link.color}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
