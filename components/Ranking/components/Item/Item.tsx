import Styled from "./Item.styles";
import Image from "next/image";
import { FC } from "types";
import { IItem } from "./Item.types";

export const Item = (props: FC<IItem>) => {
  return (
    <Styled.Item className="ranking__item">
      <span className="ranking__item__photo">
        <Image src={props.picture} alt={props.name} fill />
      </span>
      <div className="ranking__item__info">
        <p className="ranking__item__info__name">{props.name}</p>
        <p className="ranking__item__info__description">{props.description}</p>
      </div>
    </Styled.Item>
  );
};
