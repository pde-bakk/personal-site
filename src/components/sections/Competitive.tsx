import { useInView } from "../../hooks/useInView";

const IMG_BASE = "https://static.codingame.com/servlet/fileservlet?id=";

class BotChallenge {
  id: string;
  title: string;
  subtitle: string;
  ranking: number;
  total: number;
  url: string;

  constructor(id: string, title: string, subtitle: string, ranking: number, total: number, url: string) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.ranking = ranking;
    this.total = total;
    this.url = url;
  }

  get cover() {
    return `${IMG_BASE}${this.id}`;
  }
}

const botChallenges: BotChallenge[] = [
  new BotChallenge(
      "148057209217253",
      "Soak Overflow",
      "Summer Challenge 2025",
      54,
      4111,
      "https://www.codingame.com/multiplayer/bot-programming/soak-overflow"
  ),
  new BotChallenge(
      "134969982703282",
      "Cellularena",
      "Winter Challenge 2024",
      23,
      4272,
      "https://www.codingame.com/multiplayer/bot-programming/winter-challenge-2024"
  ),
  new BotChallenge(
      "125894403649811",
      "Olymbits",
      "Summer Challenge 2024",
      413,
      6263,
      "https://www.codingame.com/multiplayer/bot-programming/summer-challenge-2024-olymbits"
  ),
  new BotChallenge(
      "114650828445006",
      "Seabed Security",
      "Fall Challenge 2023",
      408,
      5264,
      "https://www.codingame.com/multiplayer/bot-programming/seabed-security"
  ),
  new BotChallenge(
      "103881564349131",
      "Spring Challenge 2023",
      "Ants",
      758,
      5679,
      "https://www.codingame.com/multiplayer/bot-programming/spring-challenge-2023-ants"
  ),
  new BotChallenge(
      "91246287446747",
      "Keep Off The Grass",
      "Fall Challenge 2022",
      75,
      4979,
      "https://www.codingame.com/multiplayer/bot-programming/keep-off-the-grass-fall-challenge-2022"
  ),
  new BotChallenge(
      "80263145171519",
      "Spider Attack",
      "Spring Challenge 2022",
      483,
      9287,
      "https://www.codingame.com/multiplayer/bot-programming/spring-challenge-2022"
  ),
  new BotChallenge(
      "64484028993851",
      "Spring Challenge 2021",
      "",
      298,
      8438,
      "https://www.codingame.com/multiplayer/bot-programming/spring-challenge-2021"
  ),
  new BotChallenge(
      "54137529209898",
      "Fall Challenge 2020",
      "",
      431,
      8802,
      "https://www.codingame.com/multiplayer/bot-programming/fall-challenge-2020"
  ),
  new BotChallenge(
      "44730303396746",
      "Spring Challenge 2020",
      "",
      225,
      7589,
      "https://www.codingame.com/multiplayer/bot-programming/spring-challenge-2020"
  ),
  new BotChallenge(
      "8231286622070",
      "Hypersonic",
      "",
      263,
      3373,
      "https://www.codingame.com/multiplayer/bot-programming/hypersonic"
  ),
  new BotChallenge(
      "4769455388710",
      "Smash The Code",
      "",
      972,
      2958,
      "https://www.codingame.com/multiplayer/bot-programming/smash-the-code"
  ),
  new BotChallenge(
      "4769343092008",
      "Game of Drones",
      "",
      542,
      4606,
      "https://www.codingame.com/multiplayer/bot-programming/game-of-drones"
  ),
  new BotChallenge(
      "74038964843692",
      "Fantastic Bits",
      "",
      2209,
      4119,
      "https://www.codingame.com/multiplayer/bot-programming/fantastic-bits"
  ),
  new BotChallenge(
      "3825971694298",
      "Mad Pod Racing",
      "",
      6334,
      229432,
      "https://www.codingame.com/multiplayer/bot-programming/mad-pod-racing"
  ),
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
