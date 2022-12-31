import Styled from "./Item.styles";
import Image from "next/image";
import { FC } from "types";
import { IRankingItem } from "./Item.types";
import { getPercent } from "../functions";

export const Item = (props: FC<IRankingItem>) => {
  const { positive, negative, position } = props;

  const percentage = getPercent(positive, negative);

  return (
    <Styled.Item className="ranking__item">
      <div className="ranking__item__photo">
        <Image src={props.picture} alt={props.name} fill />
        <span className="ranking__item__photo__bullet">{position + 1}</span>
      </div>
      <div className="ranking__item__info">
        <p className="ranking__item__info__name">{props.name}</p>
        <p className="ranking__item__info__description">{props.description}</p>
      </div>
      <div className="ranking__item__tooltip">
        <div className="ranking__item__tooltip__reputation">
          <div className="ranking__item__tooltip__reputation_title">Gostam</div>
          <div className="ranking__item__tooltip__reputation__likes">
            {`${percentage.positive}%`}
          </div>
        </div>
        <div className="ranking__item__tooltip__reputation">
          <div className="ranking__item__tooltip__reputation_title">
            Não gostam
          </div>
          <div className="ranking__item__tooltip__reputation__likes">
            {`${percentage.negative}%`}
          </div>
        </div>
      </div>
    </Styled.Item>
  );
};
