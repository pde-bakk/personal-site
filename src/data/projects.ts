export interface Project {
  name: string;
  icon: string;
  category: "work" | "university";
  problem: string;
  approach: string;
  tech: string[];
  link: string;
  media?: { type: "image" | "video"; src: string };
}

export const projects: Project[] = [
  {
    name: "Data Clustering Pipeline",
    icon: "\uD83D\uDCCA",
    category: "work",
    problem: "Process billions of records for anomaly detection at scale",
    approach:
      "Multi-language pipeline with Go orchestration, Rust compute, Python ML — columnar storage via Parquet/Arrow",
    tech: ["Go", "Rust", "Python", "Parquet", "gRPC"],
    link: "https://github.com/pde-bakk",
  },
  {
    name: "Custom Nginx",
    icon: "\uD83C\uDF10",
    category: "university",
    problem: "Understand HTTP servers from the ground up",
    approach:
      "Built a lightweight, RFC-compliant web server handling CGI, chunked transfer, and virtual hosts",
    tech: ["C++", "HTTP", "Sockets", "CGI"],
    link: "https://github.com/42pde-bakk/webserv.git",
  },
  {
    name: "Cryptography Suite",
    icon: "\uD83D\uDD10",
    category: "university",
    problem: "Learn cryptographic primitives by implementing them",
    approach:
      "Reimplemented MD5, SHA256, DES, and RSA algorithms from specification",
    tech: ["C", "Cryptography", "Math"],
    link: "https://github.com/42pde-bakk/ft_ssl.git",
  },
  {
    name: "Gomoku AI",
    icon: "\uD83E\uDDE0",
    category: "university",
    problem: "Create an AI that beats humans at Gomoku",
    approach:
      "Minimax algorithm with alpha-beta pruning and heuristic board evaluation",
    tech: ["C++", "AI", "Game Theory"],
    link: "https://github.com/42pde-bakk/gomoku.git",
  },
  {
    name: "Reverse Engineering",
    icon: "\uD83D\uDD75\uFE0F",
    category: "university",
    problem: "Exploit vulnerabilities in compiled binaries",
    approach:
      "Reverse engineered C/C++ binaries using Ghidra, developed buffer overflow and format string exploits",
    tech: ["Assembly", "Ghidra", "C", "Security"],
    link: "https://github.com/42pde-bakk/rainfall.git",
  },
  {
    name: "Pong Tournament",
    icon: "\uD83C\uDFD3",
    category: "university",
    problem: "Build a full-stack multiplayer game platform",
    approach:
      "Real-time pong with matchmaking, guilds, chat, and friend system",
    tech: ["TypeScript", "WebSockets", "Docker"],
    link: "https://github.com/42pde-bakk/ft_transcendence.git",
  },
];

export const PROJECT_TABS = ["Work", "University"];
