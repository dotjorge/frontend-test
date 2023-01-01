import "@testing-library/jest-dom";
import { getPercent } from "../getPercent/getPercent";

describe("Função Ranking > getPercent", () => {
  it("Deve retornar um objeto com as porcentagens corretas", () => {
    const percent = getPercent(50, 50);

    expect(percent).toMatchObject({
      positive: 50,
      negative: 50,
    });
  });

  it("Deve retornar 0 se os valores forem 0", () => {
    const percent = getPercent(0, 0);

    expect(percent).toMatchObject({
      positive: 0,
      negative: 0,
    });
  });
});
