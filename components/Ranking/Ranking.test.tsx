import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Ranking } from "./Ranking";
import { IList } from "./components/List/List.types";

const rankingProps = {
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

describe("Componente Ranking", () => {
  it("Deve renderizar uma tag h1 com o texto RANKING", () => {
    render(<Ranking {...rankingProps} />);

    const h1 = screen.getByRole("heading");

    expect(h1).toHaveTextContent("RANKING");
  });

  it("Deve renderizar o componente List com as props passadas", () => {
    render(<Ranking {...rankingProps} />);
    const { data } = rankingProps;

    const li = screen.getAllByRole("listitem");

    for (let i = 0; i < data.length; i++) {
      expect(li[i]).toContainHTML(data[i].name);
      expect(li[i]).toContainHTML(data[i].description);
    }
  });
});
