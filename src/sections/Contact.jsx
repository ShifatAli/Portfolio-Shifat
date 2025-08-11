/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ArrowUp, Mail, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Contact() {
  const [showScroll, setShowScroll] = useState(false);
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      honey: formData.get("website"), // honeypot
      timestamp: parseInt(formData.get("timestamp"), 10),
    };

    try {
      const res = await axios.post("/api/send", data, {
        headers: {
          "x-secret-key": "shifat@2025!contact_secure", // Must match env var
        },
      });

      if (res.data.success) {
        alert("Message sent successfully!");
        e.target.reset();
        setTimestamp(Date.now());
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col"
    >
      <motion.div
        className="flex-grow flex items-center justify-center px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Contact Form */}
        <div className="w-full max-w-3xl">
          <h2 className="text-4xl font-bold text-[#DAA520] mb-8 text-center">
            Contact Me
          </h2>

          <div className="bg-[#e2e8f0] dark:bg-[#0f172a] border border-gray-300 dark:border-gray-700 p-8 rounded-lg shadow-lg">
            <form className="space-y-5" onSubmit={sendEmail}>
              <input type="hidden" name="timestamp" value={timestamp} />
              <div style={{ display: "none" }}>
                <label>
                  Website
                  <input type="text" name="website" />
                </label>
              </div>

              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white h-32 resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-[#DAA520] text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition duration-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      {/* Footer-style Let's Connect */}
      <footer className="bg-[#111827] dark:bg-[#1f2937] py-6 px-6 mt-auto flex justify-center">
        <div className="max-w-6xl w-full flex flex-wrap justify-center gap-6 text-white text-sm">
          <a
            href="mailto:shifatali0906@gmail.com"
            className="flex items-center gap-2 hover:text-[#DAA520] transition"
          >
            <Mail size={18} /> shifatali0906@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/shifatali/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#DAA520] transition"
          >
            <Linkedin size={18} /> linkedin.com/in/shifatali
          </a>

          <a
            href="https://github.com/ShifatAli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#DAA520] transition"
          >
            <Github size={18} /> github.com/ShifatAli
          </a>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#DAA520] text-white shadow-lg hover:bg-yellow-600 transition duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </section>
  );
}
