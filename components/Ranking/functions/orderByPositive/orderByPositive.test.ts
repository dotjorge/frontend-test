import "@testing-library/jest-dom";
import { IList } from "components/Ranking/components/List/List.types";
import { orderByPositive } from "../orderByPositive/orderByPositive";

const listProps = {
  data: [
    // Menor proporção de positive
    {
      id: "1",
      picture: null,
      name: "Nome 1",
      description: "Descrição 1",
      positive: 254,
      negative: 453,
    },
    // Maior proporçõ de positive
    {
      id: "2",
      picture: null,
      name: "Nome 2",
      description: "Descrição 2",
      positive: 100,
      negative: 2,
    },
    // Segunda maior proporção de positive
    {
      id: "3",
      picture: null,
      name: "Nome 3",
      description: "Descrição 3",
      positive: 39,
      negative: 21,
    },
  ],
} satisfies IList;

describe("Função Ranking > orderByPositive", () => {
  it("Deve retornar a lista organizada da maior proporção de positive pra menor", () => {
    const { data } = listProps;
    const orderedList = orderByPositive(data);

    expect(orderedList[0].name).toBe("Nome 2");
    expect(orderedList[1].name).toBe("Nome 3");
    expect(orderedList[2].name).toBe("Nome 1");
  });
});
