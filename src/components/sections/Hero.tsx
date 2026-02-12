import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import MetricCard from "../ui/MetricCard";
import peerdb_jpg from "../../assets/peerdb.jpg";
import { useInView } from "../../hooks/useInView";

const Hero = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="hero" className="min-h-screen flex items-center bg-background_colour">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 py-20 w-full fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-accent_purple font-mono text-sm mb-2">Hi, I'm</p>
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4">
              Peer de Bakker
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate_body mb-6">
              Senior Software Engineer
            </h2>
            <p className="text-slate_body max-w-lg mb-8">
              Building data pipelines that process billions of records, crafting high-performance
              systems in Go, Rust, and Python, and breaking things apart to understand how they work.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/pde-bakk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate_body hover:text-accent_purple transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/peer-de-bakker"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate_body hover:text-accent_purple transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:peerdebakker@icloud.com"
                aria-label="Email"
                className="text-slate_body hover:text-accent_purple transition-colors"
              >
                <HiMail size={24} />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              src={peerdb_jpg}
              alt="Peer de Bakker"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-accent_purple/30"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
          <MetricCard value="Billions" label="Records processed in production pipelines" />
          <MetricCard value="Top 0.1%" label="Clash of Code — Codingame" />
          <MetricCard value="3 Languages" label="English, Dutch, French" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
