import { FC } from "types";
import Styled from "./Item.styles";
import { IItem } from "./Item.types";
import Image from "next/image";

export const Item = (props: FC<IItem>) => {
  return (
    <Styled.Item>
      <Styled.Photo>
        <Image src={props.picture} alt={props.name} fill />
      </Styled.Photo>
      <Styled.Info>
        <Styled.Title>{props.name}</Styled.Title>
        <Styled.SubTitle>{props.description}</Styled.SubTitle>
      </Styled.Info>
    </Styled.Item>
  );
};
