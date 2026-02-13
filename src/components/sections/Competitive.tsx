import FadeInSection from "../ui/FadeInSection";
import { botChallenges, formatPercentile } from "../../data/competitive";

const Competitive = () => {
  return (
    <section id="competitive" className="bg-background_colour py-20">
      <FadeInSection className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-2">
          Competitive Programming
        </h2>
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

        <h3 className="text-xl font-semibold text-white mb-4">
          Bot Programming
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {botChallenges.map((ch) => (
            <a
              key={ch.title}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-accent_purple/40 transition-colors"
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={ch.cover}
                  alt={ch.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-white font-semibold text-sm">{ch.title}</p>
                {ch.subtitle && (
                  <p className="text-slate_body text-xs">{ch.subtitle}</p>
                )}
                <div className="flex items-center justify-between mt-2">
                  <p className="text-accent_purple font-mono font-bold text-sm">
                    #{ch.ranking.toLocaleString()} / {ch.total.toLocaleString()}
                  </p>
                  <span className="text-xs text-slate_body font-mono">
                    {formatPercentile(ch.ranking, ch.total)}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Competitive;
