import Styled from "./Ranking.styles";
import { FC } from "types";
import { List } from "./components";
import { IList } from "./components/List/List.types";
import Image from "next/image";
import AFazendaLogo from "/public/a-fazenda-logo.png";

export const Ranking = (props: FC<IList>) => {
  return (
    <Styled.Ranking>
      <header className="ranking__header">
        <div className="ranking__header__title__logo">
          <Image
            className="ranking__header__title__logo__img"
            alt="A Fazenda"
            src={AFazendaLogo}
            fill
          />
        </div>
        <h1 className="ranking__header__title">RANKING</h1>
      </header>
      <List data={props.data} />
    </Styled.Ranking>
  );
};
