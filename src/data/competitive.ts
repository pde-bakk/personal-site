const IMG_BASE = "https://static.codingame.com/servlet/fileservlet?id=";

export interface BotChallenge {
  id: string;
  title: string;
  subtitle: string;
  ranking: number;
  total: number;
  url: string;
  cover: string;
}

function challenge(
  id: string,
  title: string,
  subtitle: string,
  ranking: number,
  total: number,
  url: string,
): BotChallenge {
  return { id, title, subtitle, ranking, total, url, cover: `${IMG_BASE}${id}` };
}

export const botChallenges: BotChallenge[] = [
  challenge(
    "148057209217253",
    "Soak Overflow",
    "Summer Challenge 2025",
    54,
    4111,
    "https://www.codingame.com/multiplayer/bot-programming/soak-overflow",
  ),
  challenge(
    "134969982703282",
    "Cellularena",
    "Winter Challenge 2024",
    23,
    4272,
    "https://www.codingame.com/multiplayer/bot-programming/winter-challenge-2024",
  ),
  challenge(
    "125894403649811",
    "Olymbits",
    "Summer Challenge 2024",
    413,
    6263,
    "https://www.codingame.com/multiplayer/bot-programming/summer-challenge-2024-olymbits",
  ),
  challenge(
    "114650828445006",
    "Seabed Security",
    "Fall Challenge 2023",
    408,
    5264,
    "https://www.codingame.com/multiplayer/bot-programming/seabed-security",
  ),
  challenge(
    "103881564349131",
    "Spring Challenge 2023",
    "Ants",
    758,
    5679,
    "https://www.codingame.com/multiplayer/bot-programming/spring-challenge-2023-ants",
  ),
  challenge(
    "91246287446747",
    "Keep Off The Grass",
    "Fall Challenge 2022",
    75,
    4979,
    "https://www.codingame.com/multiplayer/bot-programming/keep-off-the-grass-fall-challenge-2022",
  ),
  challenge(
    "80263145171519",
    "Spider Attack",
    "Spring Challenge 2022",
    483,
    9287,
    "https://www.codingame.com/multiplayer/bot-programming/spring-challenge-2022",
  ),
  challenge(
    "64484028993851",
    "Spring Challenge 2021",
    "",
    298,
    8438,
    "https://www.codingame.com/multiplayer/bot-programming/spring-challenge-2021",
  ),
  challenge(
    "54137529209898",
    "Fall Challenge 2020",
    "",
    431,
    8802,
    "https://www.codingame.com/multiplayer/bot-programming/fall-challenge-2020",
  ),
  challenge(
    "44730303396746",
    "Spring Challenge 2020",
    "",
    225,
    7589,
    "https://www.codingame.com/multiplayer/bot-programming/spring-challenge-2020",
  ),
  challenge(
    "8231286622070",
    "Hypersonic",
    "",
    263,
    3373,
    "https://www.codingame.com/multiplayer/bot-programming/hypersonic",
  ),
  challenge(
    "4769455388710",
    "Smash The Code",
    "",
    972,
    2958,
    "https://www.codingame.com/multiplayer/bot-programming/smash-the-code",
  ),
  challenge(
    "4769343092008",
    "Game of Drones",
    "",
    542,
    4606,
    "https://www.codingame.com/multiplayer/bot-programming/game-of-drones",
  ),
  challenge(
    "74038964843692",
    "Fantastic Bits",
    "",
    2209,
    4119,
    "https://www.codingame.com/multiplayer/bot-programming/fantastic-bits",
  ),
  challenge(
    "3825971694298",
    "Mad Pod Racing",
    "",
    6334,
    229432,
    "https://www.codingame.com/multiplayer/bot-programming/mad-pod-racing",
  ),
];

export const formatPercentile = (ranking: number, total: number) => {
  const pct = (ranking / total) * 100;
  if (pct < 1) return `Top ${pct.toFixed(1)}%`;
  return `Top ${Math.round(pct)}%`;
};
