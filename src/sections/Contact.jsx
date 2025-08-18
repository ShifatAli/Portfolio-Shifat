import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Mail, Github, Linkedin } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [showScroll, setShowScroll] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot check
    if (formRef.current.website.value) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error.text);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"  
      className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white"
    >
      <motion.div
        className="flex-grow flex justify-center items-center px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-3xl">
          <h2 className="text-4xl font-bold text-[#DAA520] mb-8 text-center">
            Contact Me
          </h2>

          <div className="bg-[#e2e8f0] dark:bg-[#0f172a] border border-gray-300 dark:border-gray-700 p-8 rounded-lg shadow-lg">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5"
              autoComplete="off"
            >
              {/* Honeypot */}
              <div style={{ display: "none" }}>
                <input name="website" />
              </div>

              <FormInput label="Your Name" name="from_name" type="text" />
              <FormInput label="Your Email" name="from_email" type="email" />
              <FormTextarea label="Your Message" name="message" />

              <button
                type="submit"
                className="w-full px-6 py-2 bg-[#DAA520] text-white rounded-md hover:bg-[#c69c1d] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      <Footer />

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#DAA520] text-white shadow-lg hover:bg-[#c69c1d] transition duration-300"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <ToastContainer />
    </section>
  );
}

/* Helper Components */
function FormInput({ label, name, type }) {
  return (
    <div>
      <label className="block mb-1 text-sm text-gray-600 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white"
      />
    </div>
  );
}

function FormTextarea({ label, name }) {
  return (
    <div>
      <label className="block mb-1 text-sm text-gray-600 dark:text-gray-300">
        {label}
      </label>
      <textarea
        name={name}
        required
        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white h-32 resize-none"
      />
    </div>
  );
}

function Footer() {
  const links = [
    {
      href: "mailto:shifatali0906@gmail.com",
      icon: Mail,
      label: "shifatali0906@gmail.com",
    },
    {
      href: "https://www.linkedin.com/in/shifatali/",
      icon: Linkedin,
      label: "linkedin.com/in/shifatali",
    },
    {
      href: "https://github.com/ShifatAli",
      icon: Github,
      label: "github.com/ShifatAli",
    },
  ];

  return (
    <footer className="bg-[#111827] dark:bg-[#1f2937] py-6 flex justify-center">
      <div className="flex gap-6 text-white text-sm flex-wrap justify-center">
        {links.map(({ href, icon: Icon, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#DAA520] transition-colors"
          >
            <Icon size={18} /> {label}
          </a>
        ))}
      </div>
    </footer>
  );
}