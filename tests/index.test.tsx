import { render, screen } from "@testing-library/react";
import Home from "pages/index";
import "@testing-library/jest-dom";

const HomeWithoutData = () => (
  <Home fazenda={{ box_name: "", version: "1", data: [] }} />
);

describe("Home", () => {
  it("Deve renderizar", () => {
    render(
      <main>
        <HomeWithoutData />
      </main>
    );

    const homeElements = screen.getByRole("main");

    expect(homeElements.children.length).toBeGreaterThan(0);
  });

  it("Deve renderizar o componente Ranking mesmo com data sendo uma array vazia", () => {
    render(
      <main>
        <HomeWithoutData />
      </main>
    );

    const rankingTitle = screen.getByText("RANKING");

    expect(rankingTitle).toBeInTheDocument();
  });

  it("Deve renderizar o componente Ranking com as props do backend", () => {
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
