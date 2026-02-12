import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useInView } from "../../hooks/useInView";

const Contact = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="contact" className="bg-background_colour py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 text-center fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Let's Work Together</h2>
        <div className="w-16 h-1 bg-accent_purple mx-auto mb-8" />

        <p className="text-slate_body mb-2">
          Open to: Senior SWE, Data/Platform Engineer, Security Engineer roles
        </p>
        <p className="text-slate_body mb-8">
          Based in Amsterdam — open to remote/hybrid
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="mailto:peerdebakker@icloud.com"
            className="flex items-center gap-2 text-slate_body hover:text-accent_purple transition-colors"
          >
            <HiMail size={20} /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/peer-de-bakker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate_body hover:text-accent_purple transition-colors"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/pde-bakk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate_body hover:text-accent_purple transition-colors"
          >
            <FaGithub size={20} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
