import Styled from "./List.styles";
import { FC } from "types";
import { Item } from "../";
import { IList } from "./List.types";
import { getPercent } from "../../functions";

export const List = (props: FC<IList>) => {
  const { data } = props;

  const orderedList = [...data].sort((a, b) => {
    const currentItem = getPercent(a.positive, a.negative);
    const acc = getPercent(b.positive, b.negative);
    return acc.positive - currentItem.positive;
  });

  return (
    <Styled.List className="ranking">
      {orderedList?.map((item, index) => (
        <Item
          key={item.id}
          position={index}
          id={item.id}
          picture={item.picture}
          name={item.name}
          description={item.description}
          positive={item.positive}
          negative={item.negative}
        />
      ))}
    </Styled.List>
  );
};
