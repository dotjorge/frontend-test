import { FC } from "types";
import { List } from "./components";
import { IList } from "./components/List/List.types";

export const Ranking = (props: FC<IList>) => {
  return <List data={props.data} />;
};
