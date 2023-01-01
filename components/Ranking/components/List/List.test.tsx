import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { List } from "./List";
import { IList } from "./List.types";

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

const ListWithProps = <List {...listProps} />;

describe("Componente Ranking > List", () => {
  it("Deve renderizar uma lista ordenada (ol)", () => {
    render(ListWithProps);

    const ol = screen.getAllByRole("list");

    expect(ol).toHaveLength(1);
  });

  describe("Deve renderizar os items (li)", () => {
    it("Com a mesma quantidade de objetos passados como prop", () => {
      render(ListWithProps);

      const items = screen.getAllByRole("listitem");

      expect(items).toHaveLength(listProps.data.length);
    });

    it("Na ordem de maior proporção de positive pra menor", () => {
      render(ListWithProps);

      const items = screen.getAllByRole("listitem");

      expect(items[0]).toContainHTML("Nome 2");
      expect(items[1]).toContainHTML("Nome 3");
      expect(items[2]).toContainHTML("Nome 1");
    });
  });
});
