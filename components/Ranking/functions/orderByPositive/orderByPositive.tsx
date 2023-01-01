import { getPercent } from "../getPercent/getPercent";
import { OrderByPositive } from "./orderByPositive.types";

export const orderByPositive: OrderByPositive = (items) => {
  const orderedList = items?.sort((a, b) => {
    const currentItem = getPercent(a.positive, a.negative);
    const acc = getPercent(b.positive, b.negative);
    return acc.positive - currentItem.positive;
  });

  return orderedList;
};
