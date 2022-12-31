import { GetServerSideProps } from "next";
import { Fazenda, FC, FazendaDataItem } from "types";
import { Ranking } from "components";
import { IItem } from "components/Ranking/components/Item/Item.types";
import { fotos } from "mocks/fotos";
interface PageProps {
  fazenda: Fazenda;
}

const Index = (props: FC<PageProps>) => {
  const getPicture = {
    "Rita Cadillac": fotos.RitaCadillac,
    Gominho: fotos.Gominho,
    "Yudi Tamashiro": fotos.YudiTamashiro,
    "Andressa Urach": fotos.AndressaUrach,
    "Bárbara Evans": fotos.BarbaraEvans,
  };

  const fazenda: IItem[] = props.fazenda.data.map((item) => {
    return {
      id: item.__id,
      picture: getPicture[item.name],
      name: item.name,
      description: item.description,
      positive: Number(item.positive) || 0,
      negative: Number(item.negative) || 0,
    };
  });

  return (
    <>
      <Ranking data={fazenda} />
    </>
  );
};

export default Index;

// Fetch server-side em toda request/acesso
export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const fazendaRes = await fetch("http://localhost:3000/api/fazenda");
  const fazenda: Fazenda = await fazendaRes.json();

  return {
    props: {
      fazenda,
    },
  };
};
