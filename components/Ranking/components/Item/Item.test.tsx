import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Item } from "./Item";
import { IRankingItem } from "./Item.types";
import { getPercent } from "components/Ranking/functions";

const itemProps = {
  id: "1",
  position: 0,
  picture: null,
  name: "Nome",
  description: "Descrição",
  negative: 100,
  positive: 50,
} as const satisfies IRankingItem;

const ItemWithProps = <Item {...itemProps} />;

describe("Componente Ranking > Item", () => {
  it("Deve renderizar um Item com todas as props passadas", () => {
    render(ItemWithProps);

    const { id, picture, position, positive, negative, ...rest } = itemProps;
    const percent = getPercent(positive, negative);
    const formatProps = {
      position: position + 1,
      positive: `${percent.positive}%`,
      negative: `${percent.negative}%`,
      ...rest,
    } as const;

    const values = Object.values(formatProps);

    for (let i = 0; i < values.length; i++) {
      const value = screen.getByText(values[i]);
      expect(value).toBeInTheDocument();
    }
  });
});
