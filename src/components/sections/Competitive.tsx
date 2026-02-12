import { useInView } from "../../hooks/useInView";

const IMG_BASE = "https://static.codingame.com/servlet/fileservlet?id=";

const botChallenges = [
  {
    title: "Soak Overflow",
    subtitle: "Summer Challenge 2025",
    ranking: 54,
    total: 4111,
    url: "https://www.codingame.com/multiplayer/bot-programming/soak-overflow",
    cover: `${IMG_BASE}148057209217253`,
  },
  {
    title: "Cellularena",
    subtitle: "Winter Challenge 2024",
    ranking: 23,
    total: 4272,
    url: "https://www.codingame.com/multiplayer/bot-programming/winter-challenge-2024",
    cover: `${IMG_BASE}134969982703282`,
  },
  {
    title: "Olymbits",
    subtitle: "Summer Challenge 2024",
    ranking: 413,
    total: 6263,
    url: "https://www.codingame.com/multiplayer/bot-programming/summer-challenge-2024-olymbits",
    cover: `${IMG_BASE}125894403649811`,
  },
  {
    title: "Seabed Security",
    subtitle: "Fall Challenge 2023",
    ranking: 408,
    total: 5264,
    url: "https://www.codingame.com/multiplayer/bot-programming/seabed-security",
    cover: `${IMG_BASE}114650828445006`,
  },
  {
    title: "Spring Challenge 2023",
    subtitle: "Ants",
    ranking: 758,
    total: 5679,
    url: "https://www.codingame.com/multiplayer/bot-programming/spring-challenge-2023-ants",
    cover: `${IMG_BASE}103881564349131`,
  },
  {
    title: "Keep Off The Grass",
    subtitle: "Fall Challenge 2022",
    ranking: 75,
    total: 4979,
    url: "https://www.codingame.com/multiplayer/bot-programming/keep-off-the-grass-fall-challenge-2022",
    cover: `${IMG_BASE}91246287446747`,
  },
  {
    title: "Spider Attack",
    subtitle: "Spring Challenge 2022",
    ranking: 483,
    total: 9287,
    url: "https://www.codingame.com/multiplayer/bot-programming/spring-challenge-2022",
    cover: `${IMG_BASE}80263145171519`,
  },
  {
    title: "Spring Challenge 2021",
    subtitle: "",
    ranking: 298,
    total: 8438,
    url: "https://www.codingame.com/multiplayer/bot-programming/spring-challenge-2021",
    cover: `${IMG_BASE}64484028993851`,
  },
  {
    title: "Fall Challenge 2020",
    subtitle: "",
    ranking: 431,
    total: 8802,
    url: "https://www.codingame.com/multiplayer/bot-programming/fall-challenge-2020",
    cover: `${IMG_BASE}54137529209898`,
  },
  {
    title: "Spring Challenge 2020",
    subtitle: "",
    ranking: 225,
    total: 7589,
    url: "https://www.codingame.com/multiplayer/bot-programming/spring-challenge-2020",
    cover: `${IMG_BASE}44730303396746`,
  },
  {
    title: "Hypersonic",
    subtitle: "",
    ranking: 263,
    total: 3373,
    url: "https://www.codingame.com/multiplayer/bot-programming/hypersonic",
    cover: `${IMG_BASE}8231286622070`,
  },
  {
    title: "Smash The Code",
    subtitle: "",
    ranking: 972,
    total: 2958,
    url: "https://www.codingame.com/multiplayer/bot-programming/smash-the-code",
    cover: `${IMG_BASE}4769455388710`,
  },
  {
    title: "Game of Drones",
    subtitle: "",
    ranking: 542,
    total: 4606,
    url: "https://www.codingame.com/multiplayer/bot-programming/game-of-drones",
    cover: `${IMG_BASE}4769343092008`,
  },
  {
    title: "Fantastic Bits",
    subtitle: "",
    ranking: 2209,
    total: 4119,
    url: "https://www.codingame.com/multiplayer/bot-programming/fantastic-bits",
    cover: `${IMG_BASE}74038964843692`,
  },
  {
    title: "Mad Pod Racing",
    subtitle: "",
    ranking: 6334,
    total: 229432,
    url: "https://www.codingame.com/multiplayer/bot-programming/mad-pod-racing",
    cover: `${IMG_BASE}3825971694298`,
  },
];

const formatPercentile = (ranking: number, total: number) => {
  const pct = ((ranking / total) * 100);
  if (pct < 1) return `Top ${pct.toFixed(1)}%`;
  return `Top ${Math.round(pct)}%`;
};

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

        <h3 className="text-xl font-semibold text-white mb-4">Bot Programming</h3>
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
      </div>
    </section>
  );
};

export default Competitive;
