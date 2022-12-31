import { render, screen } from "@testing-library/react";
import Home from "pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("Deve renderizar", () => {
    render(
      <main>
        <Home fazenda={{ data: [] }} />
      </main>
    );

    const homeElements = screen.getByRole("main");

    expect(homeElements.children.length).toBeGreaterThan(0);
  });

  it("Deve renderizar o componente Ranking mesmo com data sendo uma array vazia", () => {
    render(
      <main>
        <Home fazenda={{ data: [] }} />
      </main>
    );

    const rankingTitle = screen.getByText("RANKING");

    expect(rankingTitle).toBeInTheDocument();
  });

  it("Deve transformar as props do backend para as props do componente Ranking", () => {
    const mock = {
      version: "0.1.1",
      box_name: "A Fazenda - Ranking",
      data: [
        {
          __id: "1",
          timestamp: 1408396562866,
          name: "Jorge Santos",
          description: "Desenvolvedor Web Full-stack",
          picture: null,
          positive: 100,
          negative: 1,
        },
        {
          __id: "2",
          timestamp: 1408396562866,
          name: "Santos Jorge",
          description: "Audiófilo",
          picture: null,
          positive: 100,
          negative: 1,
        },
      ],
    };

    render(<Home fazenda={{ ...mock }} />);

    const { data } = mock;

    for (let i = 0; i < data.length; i++) {
      const name = screen.getByText(data[i].name);
      const description = screen.getByText(data[i].description);

      expect(name).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    }
  });
});
