import { formatPercentile, botChallenges } from "../competitive";

describe("formatPercentile", () => {
  it("returns 'Top X%' for percentile >= 1%", () => {
    expect(formatPercentile(10, 100)).toBe("Top 10%");
  });

  it("rounds to nearest integer for >= 1%", () => {
    expect(formatPercentile(15, 100)).toBe("Top 15%");
    expect(formatPercentile(1, 3)).toBe("Top 33%");
  });

  it("returns one decimal place for < 1%", () => {
    expect(formatPercentile(1, 1000)).toBe("Top 0.1%");
    expect(formatPercentile(5, 1000)).toBe("Top 0.5%");
  });

  it("handles edge case of ranking 1", () => {
    const result = formatPercentile(1, 10000);
    expect(result).toBe("Top 0.0%");
  });
});

describe("botChallenges", () => {
  it("has entries", () => {
    expect(botChallenges.length).toBeGreaterThan(0);
  });

  it("each entry has required fields", () => {
    for (const ch of botChallenges) {
      expect(ch.id).toBeTruthy();
      expect(ch.title).toBeTruthy();
      expect(ch.ranking).toBeGreaterThan(0);
      expect(ch.total).toBeGreaterThan(0);
      expect(ch.url).toMatch(/^https:\/\//);
      expect(ch.cover).toContain(ch.id);
    }
  });

  it("ranking is always less than total", () => {
    for (const ch of botChallenges) {
      expect(ch.ranking).toBeLessThan(ch.total);
    }
  });
});
