import { useInView } from "../../hooks/useInView";

const competitions = [
  {
    title: "Summer Challenge 2023",
    result: "20th / 4,200",
    detail: "C++ with profiling optimizations (perf/callgrind)",
  },
  {
    title: "Fall Challenge 2022",
    result: "56th / 4,557",
    detail: "Helped 42 Paris secure #1 school ranking",
  },
  {
    title: "Spring Challenge 2022",
    result: "255th / 7,695",
    detail: "Helped Codam reach 7th on schools ranking",
  },
];

const Competitive = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="competitive" className="bg-background_colour py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Competitive Programming</h2>
        <div className="w-16 h-1 bg-accent_purple mb-8" />

        <div className="flex items-center gap-3 mb-8">
          <span className="bg-accent_purple/20 border border-accent_purple/40 text-accent_purple px-4 py-2 rounded-full text-sm font-mono font-medium">
            Top 0.1% Clash of Code
          </span>
          <a
            href="https://www.codingame.com/profile/c6d6426a60c45cad19b5c716e713d17a6669273"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate_body hover:text-accent_purple transition-colors underline"
          >
            Codingame Profile
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {competitions.map((comp) => (
            <div
              key={comp.title}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5"
            >
              <p className="text-white font-semibold text-sm mb-1">{comp.title}</p>
              <p className="text-accent_purple font-mono font-bold text-lg">{comp.result}</p>
              <p className="text-slate_body text-xs mt-1">{comp.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitive;
