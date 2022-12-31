interface PositiveNegative {
  positive: number;
  negative: number;
}

type GetPercent = (positive: number, negative: number) => PositiveNegative;

export const getPercent: GetPercent = (positive, negative) => {
  const getPercentage = (value: number): number => {
    if (value === 0) return 0;

    // Positive: 25 Negative: 100 -> Positive: 25% Negative: 75%
    const percent = (value / (positive + negative)) * 100;
    const percentRounded = Math.round(percent);

    return percentRounded;
  };

  return {
    positive: getPercentage(positive),
    negative: getPercentage(negative),
  };
};
