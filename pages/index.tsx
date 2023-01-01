import { GetServerSideProps } from "next";
import { Fazenda, FC } from "types";
import { Ranking } from "components";
import { IItem } from "components/Ranking/components/Item/Item.types";
import { getPicture } from "utils";
import Head from "next/head";
import { decode as decodeHTML } from "html-entities";

interface PageProps {
  fazenda: Fazenda;
}

const Index = (props: FC<PageProps>) => {
  const { fazenda } = props;

  const formatedFazenda: IItem[] = fazenda?.data?.map((item) => {
    return {
      id: item.__id,
      picture: getPicture[item.name] || null,
      name: decodeHTML(item.name),
      description: decodeHTML(item.description),
      positive: Number(item.positive) || 0,
      negative: Number(item.negative) || 0,
    };
  });

  return (
    <>
      <Head>
        <title>{fazenda.box_name}</title>
        <meta property="og:title" content={fazenda.box_name} key="title" />
      </Head>
      <Ranking data={formatedFazenda} />
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
