import Styled from "./List.styles";
import { FC } from "types";
import { Item } from "../";
import { IList } from "./List.types";

export const List = (props: FC<IList>) => {
  return (
    <Styled.List>
      {props.data?.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          picture={item.picture}
          name={item.name}
          description={item.description}
          positive={item.negative}
          negative={item.negative}
        />
      ))}
    </Styled.List>
  );
};
